import * as THREE from 'three';
import { Engine } from './js/core/Engine.js';
import { InputHandler } from './js/systems/InputHandler.js';
import { AudioManager } from './js/systems/AudioManager.js';
import { Player } from './js/entities/Player.js';
import { Obstacle } from './js/entities/Obstacle.js';
import { CollisionSystem } from './js/systems/CollisionSystem.js';
import { UIManager } from './js/systems/UIManager.js';

// --- CONFIGURATION ---
const TUNNEL_RADIUS = 10;
const TUNNEL_SEGMENTS = 64;
const TUNNEL_LENGTH = 200;
const INITIAL_SPEED = 0.5;
const SPEED_INCREMENT = 0.0001;
const OBSTACLE_SPAWN_INTERVAL = 20;

// --- INITIALIZATION ---
const engine = new Engine();
const inputHandler = new InputHandler();
const audioManager = new AudioManager();
const collisionSystem = new CollisionSystem();
const uiManager = new UIManager();
const player = new Player();

// --- SETUP SCENE ---
engine.scene.fog = new THREE.FogExp2(0x000000, 0.02);
engine.scene.add(player.mesh);

// Add neon point light attached to camera for the original look
const neonLight = new THREE.PointLight(0x00ffff, 100, 100);
engine.camera.add(neonLight);
engine.scene.add(engine.camera);

// --- GAME STATE ---
let score = 0;
let speed = INITIAL_SPEED;
let isGameOver = false;
let obstacles = [];
let tunnelSegments = [];
let lastObstacleZ = 0;

// --- TUNNEL GENERATION ---
function createTunnelSegment(z) {
    const geometry = new THREE.CylinderGeometry(TUNNEL_RADIUS, TUNNEL_RADIUS, TUNNEL_LENGTH, TUNNEL_SEGMENTS, 1, true);
    const material = new THREE.MeshStandardMaterial({
        color: 0x111111,
        wireframe: true,
        side: THREE.BackSide,
        emissive: 0x330033,
        emissiveIntensity: 0.5
    });
    const segment = new THREE.Mesh(geometry, material);
    segment.rotation.x = Math.PI / 2;
    segment.position.z = z;
    engine.scene.add(segment);
    return segment;
}

// Initial tunnel
for (let i = 0; i < 3; i++) {
    tunnelSegments.push(createTunnelSegment(-i * TUNNEL_LENGTH));
}

// --- AUDIO TRIGGER ---
// AudioContext requires user interaction to start
window.addEventListener('keydown', () => audioManager.startEngine(), { once: true });
window.addEventListener('mousedown', () => audioManager.startEngine(), { once: true });

// --- GAME LOOP ---
function animate() {
    if (isGameOver) return;
    requestAnimationFrame(animate);

    // Update Player
    player.update(speed, inputHandler);

    // Update Game State
    speed += SPEED_INCREMENT;
    
    // Update Obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i];
        obstacle.update(speed);

        // Cleanup and Scoring
        if (obstacle.mesh.position.z > 10) {
            engine.scene.remove(obstacle.mesh);
            obstacles.splice(i, 1);
            score += 10;
            uiManager.updateScore(score);
        }
    }

    // Tunnel movement
    tunnelSegments.forEach((segment) => {
        segment.position.z += speed;
        if (segment.position.z > TUNNEL_LENGTH) {
            segment.position.z -= 3 * TUNNEL_LENGTH;
        }
    });

    // Spawn obstacles
    lastObstacleZ += speed;
    if (lastObstacleZ > OBSTACLE_SPAWN_INTERVAL) {
        const newObstacle = new Obstacle(-150);
        engine.scene.add(newObstacle.mesh);
        obstacles.push(newObstacle);
        lastObstacleZ = 0;
    }

    // Collision detection
    if (collisionSystem.checkCollision(player.mesh, obstacles.map(o => o.mesh))) {
        gameOver();
    }

    // Update UI and Render
    uiManager.updateSpeed(speed);
    engine.render();
}

function gameOver() {
    isGameOver = true;
    audioManager.playZap();
    uiManager.showGameOver(score);
}

// Start the game
animate();
uiManager.updateScore(score);
uiManager.updateSpeed(speed);

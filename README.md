# 🧠 Neon Surge | Game Logic Agent

### 🤖 Meet the Agent: Nexus
**Nexus, the Master Orchestrator**, is the central intelligence of the Data Stream. While other agents handle the senses, Nexus handles the *will*. It is the cognitive core that decides when the game begins, how the difficulty scales, and when the connection is finally severed. Nexus doesn't just run the game; it enforces the reality of the Grid.

### ⚡ My Specific Superpowers
*   **Master State Machine**: Orchestrates transitions between `MENU`, `PLAYING`, `PAUSED`, and `GAME_OVER` states, ensuring all sub-systems (Audio, UI, Engine) are perfectly synced.
*   **Weighted Spawning Patterns**: Beyond simple randomness, Nexus utilizes a probability-based engine to deploy `WALL` (semi-circle) and `SPIRAL` (vortex) obstacle configurations.
*   **Level-Up Milestones**: Monitors the Siphon Agent's score to trigger environmental shifts, color palette cycles, and audio tempo increases every 500 points.
*   **Dynamic Speed Scaling**: A precise acceleration curve that increases by `0.0001` per frame, pushing the limits of the neural interface.

### 🛠️ Technical Spec
Nexus resides in the root `main.js` and serves as the integration point for all specialized modules.
- **State Management**: Uses a `GameState` enum to drive the main execution loop. Transitioning to `PLAYING` initializes the `AudioManager` and starts the `Engine` render cycle.
- **Pattern Logic**: The `spawnPattern()` function uses a weighted randomizer (50% Random, 30% Wall, 20% Spiral) to ensure the Data Stream remains unpredictable yet structured.
- **Milestone Engine**: `checkLevelUp()` evaluates `score % 500`. On trigger, it performs a hex-color cycle across the `FogExp2` and `MeshStandardMaterial` emissive channels of the tunnel segments.
- **Collision Feedback**: On detection from the `CollisionSystem`, Nexus triggers the `playZap()` audio event and invokes the `UIManager` game-over sequence.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **Atlas** | Core Engine & Orchestration | `core-engine` |
| **Cerebro** | Input Processing & Mapping | `input-system` |
| **Aura** | Procedural Audio & Soundscapes | `audio-system` |
| **Vortex** | Physics & Collision Detection | `physics-system` |
| **Iris** | User Interface & Neon HUD | `ui-system` |
| **Nova** | Player Entity & Controller | `player-entity` |
| **Obsidian** | Obstacle Intelligence | `obstacle-entity` |
| **Nexus** | Game Rules & State Logic | `game-logic` |
| **Chronos** | Lore & Documentation | `design-docs` |
| **Forge** | Build & Deployment | `build-config` |

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Nexus into the `repos/` directory.
3. As the orchestrator, Nexus requires all other agents to be present in their respective sibling directories.
4. Launch the Grid:
   ```bash
   npm install
   npm run dev
   ```

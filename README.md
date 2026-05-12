# Neon Surge: Game Logic

## Superpowered 10-Agent Architecture

| Agent | Role | Focus |
| :--- | :--- | :--- |
| **Core Engine** | Scene Management | Three.js rendering, camera control, and global tick synchronization. |
| **Input System** | Control Mapping | Translating hardware events (WASD/Touch) into actionable game commands. |
| **Audio System** | Sonic Synthesis | Procedural synthwave generation and real-time sound effect triggering. |
| **Physics System** | Spatial Math | Collision detection and cylindrical coordinate transformations. |
| **UI System** | Interface Layer | Managing the DOM-based HUD, score displays, and game state overlays. |
| **Player Entity** | Avatar Controller | Ship visuals, movement constraints, and state-based animations. |
| **Obstacle Entity** | Hazard Manager | Efficient object pooling and procedural spawning of geometric hazards. |
| **Game Logic** | State Orchestrator | Managing lifecycle events, difficulty scaling, and game-over conditions. |
| **Design Docs** | Knowledge Base | Maintaining the GDD, architectural blueprints, and narrative lore. |
| **Build Config** | DevOps Pipeline | Streamlining Vite builds, dependency management, and deployment scripts. |

## Technical Breakdown for the Team

- **Security**: Hardened input validation and state protection to prevent unauthorized command injection or state manipulation.
- **Modularity**: Strict micro-agent boundaries ensuring that any module can be replaced or updated without breaking the core loop.
- **Visuals**: Low-poly neon aesthetics optimized for high-performance rendering across all device tiers.
- **AI**: Procedural obstacle placement logic that scales in complexity and density based on real-time performance metrics.
- **Audio**: A dynamic audio engine that adjusts BPM and synthesis parameters in sync with game acceleration.

## Module Focus: Game Logic

The **Game Logic** agent orchestrates state transitions, game-over conditions, and the core progression logic of Neon Surge.

**Superpowers:**
- Centralized state machine for robust lifecycle management.
- Progressive difficulty scaling algorithms (speed and hazard density).
- High-score persistence and session data orchestration.

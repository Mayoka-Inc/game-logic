# 🧠 Neon Surge | Game Logic

### 🤖 Meet the Agent: The Mastermind
**The Mastermind, the Logic Agent**, is the calculating strategist behind the Data Stream. Always three steps ahead, he orchestrates the flow of reality, scaling the challenge to match the runner's skill. He is the invisible hand that guides every session from start to finish, ensuring the game loop remains unbroken and the rules of the simulation are absolute.

### ⚡ Superpowers
*   **Finite State Machine**: Seamlessly transitions between MENU, PLAYING, PAUSED, and GAME_OVER states with absolute authority.
*   **Weighted Pattern Spawner**: Deploys advanced obstacle formations (Random, Wall, Spiral) to challenge the runner's reflexes.
*   **Level-Up Milestones**: Triggers environmental color shifts and music tempo increases as the player achieves performance goals.
*   **Dynamic Difficulty Scaling**: Real-time adjustment of game speed and hazard density based on the player's survival time.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **The Heart** | Core Engine & Orchestration | `core-engine` |
| **The Senses** | Input Processing & Mapping | `input-system` |
| **The Voice** | Procedural Audio & Soundscapes | `audio-system` |
| **The Laws** | Physics & Collision Detection | `physics-system` |
| **The Face** | User Interface & Neon HUD | `ui-system` |
| **The Hero** | Player Entity & Controller | `player-entity` |
| **The Hazard** | Obstacle Intelligence | `obstacle-entity` |
| **The Mastermind** | Game Rules & State Logic | `game-logic` |
| **The Blueprint** | Lore & Documentation | `design-docs` |
| **The Architect** | Build & Deployment | `build-config` |

### 🛠️ How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this agent into the `repos/` directory.
3. This agent is typically orchestrated by the [build-config](https://github.com/mayoka0/build-config) agent.
4. To run standalone tests:
   ```bash
   npm install
   npm run dev
   ```

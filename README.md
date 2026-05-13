<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=7aa2f7&center=true&vCenter=true&width=600&lines=Nexus:+Harmonizing+System+State...;Processing+Game+Rules...;Neon+Surge+Nexus+Online." alt="Typing SVG" />
</div>

# 🧠 Neon Surge | Game Logic Agent

### 📊 Agent Telemetry
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=mayoka0&theme=tokyo-night&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</div>

### 🤖 Meet the Agent: Nexus
**Nexus, the Master Orchestrator**, is the central intelligence of the Data Stream. While other agents handle the senses, Nexus handles the *will*. It is the cognitive core that decides when the game begins, how the difficulty scales, and when the connection is finally severed. Nexus doesn't just run the game; it enforces the reality of the Grid.

### ⚡ My Specific Superpowers
*   **Master State Machine**: Orchestrates transitions between `MENU`, `PLAYING`, `PAUSED`, and `GAME_OVER` states, ensuring all sub-systems (Audio, UI, Engine) are perfectly synced.
*   **Weighted Spawning Patterns**: Beyond simple randomness, Nexus utilizes a probability-based engine to deploy `WALL` (semi-circle) and `SPIRAL` (vortex) obstacle configurations.
*   **Level-Up Milestones**: Monitors the Siphon Agent's score to trigger environmental shifts, color palette cycles, and audio tempo increases every 500 points.
*   **Dynamic Speed Scaling**: A precise acceleration curve that increases by `0.0001` per frame, pushing the limits of the neural interface.

### 🛠️ Technical Spec
Nexus resides in the project's root `main.js` and serves as the integration point for all specialized modules. Its core is a robust **Master State Machine** that drives the main execution loop, transitioning the system through `MENU`, `PLAYING`, `PAUSED`, and `GAME_OVER` states. This orchestration ensures that all sub-systems—including the Audio, UI, and Engine modules—are perfectly synchronized. For example, transitioning to the `PLAYING` state simultaneously initializes the `AudioManager` and triggers the `Engine` to begin its high-performance rendering cycle.

The agent also implements a sophisticated **Weighted Spawning Engine** and a dynamic milestone system. The `spawnPattern()` function uses weighted probabilities (50% Random, 30% Wall, 20% Spiral) to ensure that the Data Stream remains challenging yet structured. Every 500 points, the `checkLevelUp()` routine triggers a global environmental shift, performing a hex-color cycle across the fog and tunnel materials to signal a new stage of difficulty. This is paired with a precise **Dynamic Speed Scaling** algorithm that increases the simulation's velocity by `0.0001` per frame, pushing the player's reflexes to their absolute limit.

🔗 **Part of the [Neon Surge Ecosystem](https://github.com/mayoka0/mayoka0#-neon-surge-architecture)**

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Nexus into the `repos/` directory.
3. As the orchestrator, Nexus requires all other agents to be present in their respective sibling directories.
4. Launch the Grid:
   ```bash
   npm install
   npm run dev
   ```

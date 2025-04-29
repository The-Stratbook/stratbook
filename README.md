# Stratbook: Elevate Your Tactical FPS Gameplay

Discover strategies, tips, and tricks to dominate tactical FPS games. Built by players, for the community, Stratbook is an open-source project designed to help gamers improve and share their knowledge.

---

## Status

This project is quite new and is still improving on many fronts, we do not have Guides or how-to's about how to help besides the files that are inside this project.
We are always happy with any help or contributions done by you! Doesn't matter if it is adding new strategies to the 'database' or helping build features.
At this moment we do not have a board or wiki yet, but we do want to add it in the future.

---

## Features
- **Comprehensive Strategy 'Database'**: Explore a wide range of strategies with detailed explanations, skill levels, and more.
- **Community Contributions**: Submit your own strategies or improve existing ones.
- **Open Source Development**: Collaborate with developers to add features and enhance the platform.

---

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/The-Stratbook/stratbook.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stratbook
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Explore Strategies**: Browse, search, and filter strategies tailored to different maps, operators, and playstyles.
- **Contribute**: Add new strategies or improve existing ones by following the guidelines in the [Contributing](#contributing) section.

---

## Contributing

We welcome all contributions, whether you're adding new strategies, fixing bugs, or building new features. Here's how you can contribute:

1. Fork this repository.
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a brief description of your changes"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

For more details, check out our [Contributing Guidelines](./CONTRIBUTING.md).

---

## Strategy Contributions

We welcome community contributions to our strategy database! Check out the [Contributing Strategy](#contributing-strategies) section for details on how to submit your strategies.

---

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to use, modify, and distribute this software in compliance with the license terms.

---

## Acknowledgments

A huge thank you to the community for their support and contributions. Special thanks to [vanhoutenbos](https://github.com/vanhoutenbos) for spearheading the project.

---

## Contact

Have questions or suggestions? Reach out to us:
- [GitHub Discussions](https://github.com/The-Stratbook/stratbook/discussions)
- [Discord](https://discord.gg/vBt738j)

---

## Badges (Optional - Can Be Added)
[![Build Status](https://img.shields.io/github/workflow/status/The-Stratbook/stratbook/CI)](https://github.com/The-Stratbook/stratbook/actions)
[![License](https://img.shields.io/github/license/The-Stratbook/stratbook)](./LICENSE)
[![Contributors](https://img.shields.io/github/contributors/The-Stratbook/stratbook)](https://github.com/The-Stratbook/stratbook/graphs/contributors)

---

## Screenshots (Optional - Add Visuals)
Include screenshots or GIFs here to showcase the project.

---

## Contributing Strategies

We welcome community contributions to our strategy database! Below you'll find detailed information about the structure for submitting a new strategy.

### Strategy JSON Structure

#### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | Number | A unique identifier for the strategy. Leave as 0 for new submissions, and we'll assign a final ID. |
| `title` | String | A concise, descriptive title for your strategy. |
| `description` | String | A detailed explanation of the strategy. Supports markdown formatting for better readability. |
| `side` | String | Which team the strategy is for. Must be one of: "Attacker", "Defender", or "Both". |
| `skill` | String | The skill level required to execute the strategy. Must be one of: "Beginner", "Intermediate", or "Expert". |
| `tags` | Array | Categories that describe your strategy (e.g., "Vertical Play", "Entry", "Support", "Plant Denial"). |
| `relatedStrategies` | Array | IDs of other strategies that complement or are similar to this one. Can be empty array `[]` for new submissions. |
| `contributor` | Object | Information about who submitted the strategy. At minimum, include your name. |

#### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `operator` | String | The primary operator this strategy is designed for. Leave empty if the strategy works with multiple operators. |
| `map` | String | The map this strategy is specific to. Leave empty if the strategy works across multiple maps. |
| `bombSite` | String | The specific bomb site(s) this strategy targets (e.g., "Kitchen/Service", "Basement"). |
| `imageUrl` | String | URL to an image that helps visualize the strategy (e.g., lineup positions, setup spots). |
| `videoUrl` | String | URL to a YouTube video demonstrating the strategy. |
| `videoTimestamps` | Array | Specific timestamps in the video with descriptions of what's happening at those points. |
| `lastTested` | String | Date when this strategy was last confirmed to work in-game (YYYY-MM-DD format). |
| `detailedNotes` | Object | Additional details about the strategy including team coordination required, risk level, counter strategies, alternative operators, etc. |
| `FAQ` | Array | Common questions and answers about the strategy, helpful for clarifying execution details. |

### DetailedNotes Object

The `detailedNotes` object can contain the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `teamCoordination` | String | Level of team coordination required: "Low", "Medium", or "High". |
| `riskLevel` | String | How risky the strategy is to execute: "Low", "Medium", or "High". |
| `timeRequired` | String | How long it takes to set up and execute the strategy. |
| `counterStrategies` | Array | Common defensive tactics that can counter this strategy. |
| `alternativeOperators` | Array | Other operators that can be used if the primary operator is unavailable. |
| `extraTips` | Array | Additional tips and tricks for making the strategy more effective. |

### Contributor Object

The `contributor` object can contain the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `name` | String | Your name or username (required). |
| `discord_username` | String | Your Discord username (optional). |
| `twitter` | String | Your Twitter/X handle (optional). |
| `youtube` | String | Your YouTube channel URL (optional). |

### Example Submissions

We've provided two example templates to help you understand the structure:

1. [Minimal Example](./docs/example-minimal.json) - Contains only the required fields
2. [Complete Example](./docs/example-complete.json) - Demonstrates all possible fields with detailed content

### Submission Process

To submit a new strategy:

1. Fork this repository
2. Create your strategy JSON file in the `public/data/<game>/tips` directory
3. The filename should be structured (e.g., `<id>.json`) for example `1.json`
4. Submit a pull request with your new strategy
5. Our team will review the submission and provide feedback if needed

Thank you for contributing to the Stratbook community!

## Any other contributions

Do you want to contribute but in another way than mentioned above? Feel free to contact [Jean-Paul](https://github.com/vanhoutenbos) through github or through [discord](https://discord.gg/vBt738jk)

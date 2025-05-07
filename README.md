# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing Strategies

We welcome community contributions to our strategy database! Below you'll find detailed information about the structure for submitting a new strategy.

### File structure

foccused on feature-based organization and atomic design principles.

src/
  ├── assets/           # Static assets (icons, images)
  ├── components/       # Shared reusable components (atomic design)
  │    ├── atoms/       # Basic UI elements (buttons, inputs, etc.)
  │    ├── molecules/   # Simple combinations of atoms
  │    └── organisms/   # Complex UI components 
  ├── features/         # Feature-specific code
  │    ├── maps/
  │    │    ├── components/  # Components specific to this feature
  │    │    ├── hooks/       # Feature-specific hooks
  │    │    ├── pages/       # Pages for this feature
  │    │    └── utils/       # Feature-specific utilities
  │    ├── operators/
  │    │    └── ...
  │    ├── tips/
  │    │    └── ...
  │    └── ...
  ├── layouts/          # Page layout templates
  ├── hooks/            # Shared custom hooks
  ├── pages/            # Top-level pages that don't belong to a specific feature (About, Home, etc.)
                        # Feature-specific pages should go in their respective feature folder
  ├── services/         # API services and data fetching
  ├── styles/           # Global styles and theme
  └── utils/            # Shared utility functions

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
2. Create your strategy JSON file in the `public/data/siege/tips` directory
3. The filename should be structured (e.g., `<id>.json`) for example `1.json`
4. Submit a pull request with your new strategy
5. Our team will review the submission and provide feedback if needed

Thank you for contributing to the Siege Tips community!

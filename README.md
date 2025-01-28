 GitLab Contribution Graph

This React component visualizes your GitLab contributions in a heatmap format. It fetches your contribution data from the GitLab API and displays it in an easy-to-understand graph.

## Features

- **Heatmap visualization** of GitLab contributions.
- **Supports custom username and GitLab token**.
- **Highly customizable** color options and styles.
- **Easy to integrate** into any React project.

## Installation

To use this package, follow these steps:

### 1. Install the package via NPM

Run the following command in your terminal to install the `gitlab-contribution-graph` package:

```bash
npm install gitlab-contribution-graph

2. Install required dependencies

Make sure you have the necessary dependencies installed in your project. These include react and react-dom. If they are not installed yet, use:

npm install react react-dom

3. Set up environment variables

This component requires a GitLab personal access token to fetch data from the GitLab API. Set the token in an environment file (.env) like so:

    Create a .env file in the root of your project.
    Add the following line to the .env file:

VITE_GT_TOKEN=your_gitlab_token

You can obtain your GitLab personal access token from your GitLab account under Settings > Access Tokens.
4. Install Vite for development (Optional, if using Vite for bundling)

If you're using Vite for bundling, ensure Vite is installed in your project:

npm install vite --save-dev

Usage

After installation, you can use the GitLabContributionGraph component in your React project.
Example Usage

    Create a new component or file to test the contribution graph (e.g., sandbox.jsx).
    Import the component and use it with your GitLab username and token (stored in the .env file).

import React from "react";
import ReactDOM from "react-dom/client";
import GitLabContributionGraph from "gitlab-contribution-graph";

// Fetch the GitLab token from environment variables
const gitlabToken = import.meta.env.VITE_GT_TOKEN;

const App = () => (
  <>
    <h1>Testing GitLab Contribution Graph</h1>
    <GitLabContributionGraph username="your_gitlab_username" token={gitlabToken} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

Props

    username: The GitLab username of the user whose contributions you want to visualize.
    token: The GitLab personal access token (fetched from your .env file).
    highlightColor (optional): You can pass a custom color for contributions. Default is #00aaff.

Example:

<GitLabContributionGraph username="roberag" token={process.env.REACT_APP_GITLAB_TOKEN} />

License

MIT License
Contributing

Feel free to contribute to the project! Here are some ways you can help:

    Report bugs
    Suggest features
    Submit pull requests

You can contact the project maintainer at [Your Email or GitHub Profile Link].
Authors and Acknowledgments

    Robera Getachew – Initial work and author
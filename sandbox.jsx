import React from "react";
import ReactDOM from "react-dom/client";
import GitLabContributionGraph from "./src/GitLabContributionGraph";

// Use the REACT_APP_ prefix for environment variables
const gitlabToken = import.meta.env.VITE_GT_TOKEN;

const App = () => (
  <>
    <h1>Testing GitLab Contribution Graph</h1>
    <GitLabContributionGraph username="roberag" token={gitlabToken} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

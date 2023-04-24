import React from "react";
import { navigateToUrl } from "single-spa";
import "./App.css";

const App = () => {
  return (
    <header className="header">
      <ul>
        <li onClick={() => navigateToUrl("/")}>React</li>
        <li onClick={() => navigateToUrl("/angular")}>Angular</li>
      </ul>
    </header>
  );
};

export default App;

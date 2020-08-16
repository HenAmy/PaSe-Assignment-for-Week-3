import React from "react";
import "./App.css";
import Navigation from "./Navigation.js";
import Heading from "./Heading.js";
import Wallpapers from "./Wallpapers.js";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <Navigation />
          <Heading />

          <Wallpapers />
        </div>
      </header>
    </div>
  );
}

export default App;

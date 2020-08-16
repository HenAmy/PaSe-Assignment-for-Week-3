import React, { Component } from "react";
import "./Navigation.css";

export class Heading extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default Heading;

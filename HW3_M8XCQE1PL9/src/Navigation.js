import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <a href="#">Hulk</a>
            <a href="#" className="logo is-active">
              Mavel
            </a>
            <a href="#">Venom</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

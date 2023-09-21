import React, { Component } from "react";
import { ReactDOM } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar">To Do List React App</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;

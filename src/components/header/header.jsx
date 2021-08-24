import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <button className="menu">
          <i className="fas fa-bars"></i>
        </button>
        <button className="logo">
          <img src="./images/logo.png" alt="youtube logo" />
          <span>
            Premium<sup>KR</sup>
          </span>
        </button>
      </header>
    );
  }
}

export default Header;

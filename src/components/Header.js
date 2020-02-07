import React, { Component } from "react";
import "./Header.css";

import facebookLogo from "../assets/facebook.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo">
          <img src={facebookLogo} alt="facebook" />
        </h1>
        <div className="profile">Meu Perfil</div>
      </header>
    );
  }
}

export default Header;

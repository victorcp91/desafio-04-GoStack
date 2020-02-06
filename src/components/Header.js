import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo">Facebook</h1>
        <div className="profile">Meu Perfil</div>
      </header>
    );
  }
}

export default Header;

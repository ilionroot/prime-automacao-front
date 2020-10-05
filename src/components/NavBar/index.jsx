import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import logo from "../../assets/images/logo.png";

import "./index.css";

const NavBar = () => {
  const handleMenuClick = (e) => {
    $(".latMenu").toggleClass("latMenuShow");
    $(".bar").toggleClass("barToggle");
    $(".bar").toggleClass("barAnimationToggle");
    $(".blackAll").toggleClass("blackAllToggle");
  };

  const handleHideLatMenu = () => {
    $(".latMenu").removeClass("latMenuShow");
    $(".bar").removeClass("barToggle");
    $(".bar").removeClass("barAnimationToggle");
    $(".blackAll").removeClass("blackAllToggle");
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo da Prime Automação" />
        <ul>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/produtos"
            >
              Produtos
            </Link>
          </li>
        </ul>
        <div className="menu" onClick={handleMenuClick}>
          <span id="bar1" className="bar"></span>
          <span id="bar2" className="bar"></span>
          <span id="bar3" className="bar"></span>
        </div>
      </nav>

      <div className="latMenu"></div>
      <div className="blackAll" onClick={handleHideLatMenu}></div>
    </div>
  );
};

export default NavBar;

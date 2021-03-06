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
    if (!$(".blackAll").hasClass("blackAllToggle")) {
      $(".blackAll").css("display", "initial");
      $(".blackAll").css("z-index", "0");
    } else {
      $(".blackAll").css("display", "none");
      setTimeout(() => {
        $(".blackAll").css("z-index", "-1");
      }, 250);
    }
    setTimeout(() => {
      $(".blackAll").toggleClass("blackAllToggle");
    }, 50);
  };

  const handleHideLatMenu = () => {
    $(".latMenu").removeClass("latMenuShow");
    $(".bar").removeClass("barToggle");
    $(".bar").removeClass("barAnimationToggle");
    if (!$(".blackAll").hasClass("blackAllToggle")) {
      $(".blackAll").css("display", "initial");
      $(".blackAll").css("z-index", "0");
    } else {
      $(".blackAll").css("display", "none");
      setTimeout(() => {
        $(".blackAll").css("z-index", "-1");
      }, 250);
    }
    setTimeout(() => {
      $(".blackAll").removeClass("blackAllToggle");
    }, 50);
  };

  return (
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
            to="/about"
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
            to="/products"
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
      <div className="latMenu">
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
              to="/about"
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
              to="/products"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </div>
      <div className="blackAll" onClick={handleHideLatMenu}></div>
    </nav>
  );
};

export default NavBar;

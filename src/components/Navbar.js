import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            style={Style}
            src={logo}
            alt="cocktail db logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const Style = {
  width: "130px",
  height: "70px",
};

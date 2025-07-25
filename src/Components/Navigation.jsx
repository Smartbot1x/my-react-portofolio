import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navigation.scss";
import "../Components/darkmode.css";
import logo from "../assets/logo2.png";

export default function Navigation() {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("darkmode") === "active"
  );

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", null);
    }
  }, [darkmode]);

  const handleThemeSwitch = () => setDarkmode((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <div className="menu-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Project">Projects</NavLink>
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="dk">Dk</option>
          </select>
        </div>
      </div>
      <button
        id="theme-switch"
        onClick={handleThemeSwitch}
        title="Toggle theme"
      >
        <svg
          className="svg_black"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
        </svg>
        <svg
          className="svg_white"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
        </svg>
      </button>
      <a href="#top" className="go-top" title="Go to Top">
        <ion-icon name="arrow-up"></ion-icon>
      </a>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  const { active } = props;
  return (
    <header className="header py-4">
      <nav className="container mx-auto max-w-screen-lg">
        <ul className="flex">
          <li className={active === "/" ? "active" : ""}>
            <Link to="/">Головна</Link>
          </li>
          <li className={active === "search" ? "active" : ""}>
            <Link to="/search">Пошук</Link>
          </li>
          <li className={active === "about" ? "active" : ""}>
            <Link to="/about">Про нас</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header py-4">
      <nav className="container mx-auto max-w-screen-lg">
        <ul className="flex">
          <li className={pathname === "/" ? "active" : ""}>
            <Link to="/">Головна</Link>
          </li>
          <li className={pathname === "/search" ? "active" : ""}>
            <Link to="/search">Пошук</Link>
          </li>
          <li className={pathname === "/add" ? "active" : ""}>
            <Link to="/add">Додати</Link>
          </li>
          <li className={pathname === "/about" ? "active" : ""}>
            <Link to="/about">Про нас</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import "./header.css";

function Header(props) {
  const { active } = props;
  return (
    <header className="header py-4">
      <nav className="container mx-auto max-w-screen-lg">
        <ul className="flex">
          <li className={active === "home" ? "active" : ""}>
            <a href="/">Головна</a>
          </li>
          <li className={active === "search" ? "active" : ""}>
            <a href="#">Пошук</a>
          </li>
          <li className={active === "about" ? "active" : ""}>
            <a href="#">Про нас</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

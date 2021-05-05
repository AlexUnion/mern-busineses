import React from "react";
import "./header.css";

function Header(props) {
  const { active } = props;
  return (
    <header className="header py-4">
      <nav className="container mx-auto max-w-screen-lg">
        <ul className="flex">
          <li className={active === "home" ? "active" : ""}>
            <a href="/">Home</a>
          </li>
          <li className={active === "2" ? "active" : ""}>
            <a href="#">nav 2</a>
          </li>
          <li className={active === "3" ? "active" : ""}>
            <a href="#">nav 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

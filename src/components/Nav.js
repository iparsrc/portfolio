// --- Core Modules ---
import React, { useState } from "react";
import { Link } from "react-router-dom";
// --- CSS & Images ---
import "../styles/Nav.css";
// --- Icons ---
import MenuIcon from "@material-ui/icons/Menu";

// Functional ReactJS component, that renders a navigation bar.
const Nav = ({ activeLink }) => {
  // ReactJS Hook, that trakes the navigation  bar (for responsiveness in mobile phones).
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
  };
  // Retrun the element.
  return (
    <div className="nav">
      <MenuIcon className="nav__burger" onClick={toggleNav} />
      <ul className={isNavOpen ? "nav__ul--open" : ""}>
        <li>
          <Link
            onClick={toggleNav}
            to="/"
            className={activeLink === "home" ? "nav--active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleNav}
            to="/about"
            className={activeLink === "about" ? "nav--active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleNav}
            to="/projects"
            className={activeLink === "projects" ? "nav--active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleNav}
            to="/contact"
            className={activeLink === "contact" ? "nav--active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
// Export the component.
export default Nav;

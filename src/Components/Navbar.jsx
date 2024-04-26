import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Import IoMdClose icon

import "../Styles/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="nav-bar-container container">
        <div className="logo">
          <NavLink to="/">Football sure tips</NavLink>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <IoMdClose /> : <IoMdMenu />}{" "}
          {/* Show close icon when navbar is open */}
        </div>

        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Free Football tips</NavLink>
            </li>
            <li>
              <NavLink to="/projects">League and competition</NavLink>
            </li>
            <li>
              <NavLink to="/about">Livescore</NavLink>
            </li>
            <li>
              <NavLink to="https://play.google.com/store/apps/details?id=com.newstreak.footballtips" className="nav-link-button">
                Football sure betting tips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

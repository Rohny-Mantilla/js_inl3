import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          EventTracker
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/create" className="nav-link">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

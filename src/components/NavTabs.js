import React from "react";
import { Link, useLocation } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
 
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/chat"
          className={location.pathname === "/chat" ? "nav-link active" : "nav-link"}
        >
          Chat
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/reserve"
          className={location.pathname === "/reserve" ? "nav-link active" : "nav-link"}
        >
          Reserve
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/reserve/booked"
          className={location.pathname === "/reserve/booked" ? "nav-link active" : "nav-link"}
        >
          Booked
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
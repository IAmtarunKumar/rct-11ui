import React from "react";
import "../css/component.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">PostData</Link>
      <Link to="/retrieve">RetrieveData</Link>
    </div>
);
}

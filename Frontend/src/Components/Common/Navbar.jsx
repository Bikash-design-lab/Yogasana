import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-2 border-solid p-2 border-blue-500">
      <div>
        {" "}
        <NavLink to="/">Yoga</NavLink>
      </div>
      <NavLink to="/">Dashboard</NavLink>

      <NavLink to="/fun">Fun</NavLink>

      <NavLink to="/leaderboard">Leaderboard</NavLink>

      <NavLink to="/yogasans">Yogasans</NavLink>
    </nav>
  );
};

export default Navbar;

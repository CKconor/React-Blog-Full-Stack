import React from "react";
import { List, NavLink } from "react-router-dom";
import Container from "./Container";


function Header() {
  return (
      <div className="mb-5 mt-5">
        <nav className="flex flex-row">
          <NavLink to={"/"} className="mr-10">
            Home
          </NavLink>
          <NavLink to={"/about"} className="mr-10">
            About
          </NavLink>
          <NavLink to={"/projects"} className="mr-10">
            Projects
          </NavLink>
          <NavLink to={"/blog"} className="mr-10">
            Blog
          </NavLink>
        </nav>
      </div>
  );
}

export default Header;

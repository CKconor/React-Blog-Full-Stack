import React from "react";
import {NavLink } from "react-router-dom";

function Header() {
  return (
      <div className="mb-5 mt-5">
        <nav className="flex flex-row">
          <NavLink to={"/"} className="mr-10 text-lightsubtext dark:hover:text-lightmode hover:text-darkmode hover:font-bold transition-all">
            Home
          </NavLink>
          <NavLink to={"/about"} className="mr-10 text-lightsubtext dark:hover:text-lightmode hover:text-darkmode hover:font-bold transition-all">
            About
          </NavLink>
          <NavLink to={"/projects"} className="mr-10 text-lightsubtext dark:hover:text-lightmode hover:text-darkmode hover:font-bold transition-all">
            Projects
          </NavLink>
          <NavLink to={"/blog"} className="mr-10 text-lightsubtext dark:hover:text-lightmode hover:text-darkmode hover:font-bold transition-all">
            Blog
          </NavLink>
        </nav>
      </div>
  );
}

export default Header;

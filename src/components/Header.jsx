import React from "react";
import Container from "./Container";


function Header() {
  return (
      <div className="mb-5 mt-5">
        <nav className="flex flex-row">
          <a className="mr-10" href="/">
            Home
          </a>
          <a className="mr-10" href="/">
            About
          </a>
          <a className="mr-10" href="/">
            Projects
          </a>
          <a className="mr-10" href="/">
            Blog
          </a>
        </nav>
      </div>
  );
}

export default Header;

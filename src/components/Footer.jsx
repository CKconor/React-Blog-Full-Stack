import React from "react";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer mt-10 flex flex-col sm:flex-row justify-between text-lightsubtext dark:text-darksubtext">
      <div className="flex flex-col sm:basis 3/4">
        <div className=" flex-col sm:flex-row flex sm:mt-7 mt-4">
          <NavLink
            to={"/"}
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
          >
            About
          </NavLink>
          <NavLink
            to={"/projects"}
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
          >
            Projects
          </NavLink>
          <NavLink
            to={"/blog"}
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
          >
            Blog
          </NavLink>
        </div>
        <div className=" sm:flex-row flex-col flex sm:mt-5 ">
          <a
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
            href="https://youtube.com/ckplaysthegames"
          >
            YouTube
          </a>
          <a
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
            href="https://github.com/ckconor"
          >
            Github
          </a>
          <a
            className="mr-10 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
            href="https://dribbble.com/CKconor"
          >
            Dribble
          </a>
          <a
            className="mr-1 mb-1 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition-all"
            href="https://www.linkedin.com/in/conor-kemp-790920178"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:basis 1/4 sm:items-end mt-7 max-w-[130px]">
        <Contact />
      </div>
    </footer>
  );
}

export default Footer;

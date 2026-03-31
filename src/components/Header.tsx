import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

function Header() {
  return (
    <header className="pt-8 pb-4 md:pt-12 md:pb-6">
      <nav className="flex items-center justify-between">
        <NavLink
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-tight text-darkmode dark:text-lightmode hover:opacity-70 transition-opacity"
        >
          CK
        </NavLink>
        <div className="flex items-center gap-8">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="nav-link text-sm tracking-wide uppercase text-lightsubtext dark:text-darksubtext hover:text-darkmode dark:hover:text-lightmode transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;

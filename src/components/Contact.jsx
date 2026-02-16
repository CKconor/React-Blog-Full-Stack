import React from "react";

function Contact() {
  return (
    <a
      href="mailto:conorkempwebstudio@gmail.com"
      className="group inline-flex items-center gap-2 text-sm font-medium text-accentcolor hover:opacity-70 transition-opacity"
    >
      <span className="relative">
        Get in touch
        <span className="absolute bottom-0 left-0 w-full h-px bg-accentcolor transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
      </span>
      <svg
        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

export default Contact;

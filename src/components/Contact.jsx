import React from "react";

function Contact(className) {
  return (
    <div className="rounded border border-accentcolor bg-accentcolor px-4 py-2 text-lightmode transition duration-0 hover:bg-transparent hover:text-accentcolor hover:duration-150 dark:text-darkmode">
      <a href="mailto:conorkempwebstudio@gmail.com">
        <button className="font-bold">Contact Me</button>
      </a>
    </div>
  );
}

export default Contact;

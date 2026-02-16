import React from "react";

function Container({ children }) {
  return (
    <div
      id="skip"
      className="flex flex-col justify-center max-w-3xl mx-auto pb-24 px-6 md:px-8"
    >
      {children}
    </div>
  );
}

export default Container;

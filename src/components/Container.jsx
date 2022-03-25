import React from "react";

function Container({children}) {
  return (
    <div
      id="skip"
      className="flex flex-col justify-center items-start max-w-5xl mx-auto pb-16"
    >
      {children}
    </div>
  );
}

export default Container;

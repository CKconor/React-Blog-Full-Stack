import React from "react";

function Container({children}) {
  return (
    <div
      id="skip"
      className="flex flex-col justify-center max-w-4xl mx-auto pb-16 px-6"
    >
      {children}
    </div>
  );
}

export default Container;

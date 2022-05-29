import React from "react";

import "./styles/button.scss";

function Button({ onClick, disabled,className, children }) {
  return (
    <button
      disabled={disabled}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
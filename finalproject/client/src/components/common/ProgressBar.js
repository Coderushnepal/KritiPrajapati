import React from "react";

import "./styles/ProgressBar.scss";

function ProgressBar({ value, target, hideText }) {
  return (
    <div className="progressBar-container">
      <progress
        className="progressBar"
        id="donation"
        value={value}
        max={target}
      ></progress>
      {!hideText && (
        <div className="progressText">
          <span className="raisedAmount">Rs. {value} raised</span> of Rs.{" "}
          {target}
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
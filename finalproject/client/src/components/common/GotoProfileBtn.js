import React from "react";
import { Link } from "react-router-dom";

import "./styles/GotoProfileBtn.scss";

function GotoProfileBtn({ userId }) {
  return (
    <div className="viewProfileBtn">
      <Link to={`/profile/${userId}`}>View profile</Link>
    </div>
  );
}

export default GotoProfileBtn;
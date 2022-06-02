import React from "react";
import { Link } from "react-router-dom";

import Button from "../common/Button";
import Img404 from "../../assets/images/404img.svg";

import "./styles/NotFound.scss";

function NotFound() {
  return (
    <div className="not-found-container">
      <img src={Img404} alt="404" className="img404" />
      <div className="404-message">
        <h1 className="title">Hey,</h1>
        <p className="description">
          the page you are looking for could not be found. Would you like to go
          back to helping people?
        </p>
        <div className="btn-container">
          <Link to="/feed">
            <Button>Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
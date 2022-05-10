import React from "react";
import { Link } from "react-router-dom";

import Navs from "./Navs";
import SearchBar from "./SearchBar";
import LogoSvg from "../../../assets/images/sahayog.svg";

import "./styles/Header.scss";

function Header() {
  return (
    <div className="header-container clearfix">
      <Link to="/feed">
        <div className="left-section clearfix">
          <img src={LogoSvg} alt="logo" className="logo" />
          <h1 className="logo-title">Sahayog</h1>
        </div>
      </Link>
      <div className="right-section clearfix">
        <div className=" search-section   ">
          <SearchBar />
        </div>
        <div className="navs-section">
          <Navs />
        </div>
      </div>
    </div>
  );
}

export default Header;

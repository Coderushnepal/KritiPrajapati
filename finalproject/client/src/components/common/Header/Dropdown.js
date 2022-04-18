import React, { useState } from "react";
import { logoutUser } from "../../../actions/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import DownSvg from "../../../assets/icons/down.svg";

import "./styles/Dropdown.scss";

function Dropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const logout = async () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const toggleDropDown = () => setShowDropdown(!showDropdown);
  return (
    <div className="dropdown-container">
      <div className="toggler" onClick={toggleDropDown}>
        <img
          src={DownSvg}
          alt="down"
          className={`${showDropdown ? "isOpen" : ""} `}
        />
      </div>
      {showDropdown && (
        <div className="menu">
          <div className="menu-item" onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

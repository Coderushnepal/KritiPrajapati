import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import AvatarImg from "../AvatarImg";

import { logoutUser } from "../../../actions/users";
import DownSvg from "../../../assets/icons/down.svg";

import "./styles/Dropdown.scss";
import GotoProfileBtn from "../GotoProfileBtn";

function Dropdown() {
  const user = useSelector((state) => state.user.user);
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
          <div
            className="menu-item"
            onClick={() => {
              console.log("ed");
              setShowDropdown(false);
            }}
          >
            <div className="nav-userDetail-container ">
              <div className="clearfix">
                <span className="avatarImg">
                  <AvatarImg avatar={user.avatar} name={user.fullName} />
                </span>
                <div className="userName">{user.fullName}</div>
              </div>
              <GotoProfileBtn userId={user.id} />
            </div>
          </div>
          <div className="menu-item" onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
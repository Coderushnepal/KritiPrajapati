import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/UserInfo.scss";

function UserInfo() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="userInfo-container clearfix">
      {user.fullName && (
        <Link to={`/profile/${user.id}`}>
          <img src={user.avatar} alt={user.fullName} className="userAvatar" />
          <div className="fullName">{user.fullName.split(" ")[0]}</div>
        </Link>
      )}
    </div>
  );
}

export default UserInfo;
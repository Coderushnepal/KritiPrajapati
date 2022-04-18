import React from "react";
import { useSelector } from "react-redux";

import "./styles/UserInfo.scss";

function UserInfo() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="userInfo-container clearfix">
      {user.fullName && (
        <>
          <img src={user.avatar} alt={user.fullName} className="userAvatar" />
          <div className="fullName">{user.fullName.split(" ")[0]}</div>
        </>
      )}
    </div>
  );
}

export default UserInfo;

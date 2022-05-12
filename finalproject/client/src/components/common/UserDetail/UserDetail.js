import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./styles/UserDetail.scss";

function UserDetail() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="userDetail-container">
      <div className="top-background"></div>
      {user && (
        <>
          <img className="userImg" src={user.avatar} alt={user.fullname} />
          <div className="userName">{user.fullName}</div>
          <div className="amount">Account: Rs. {user.amount}</div>
          <Link to={'/me'} className="view-profile">View Full Profile</Link>
        </>
      )}
    </div>
  );
}

export default UserDetail;

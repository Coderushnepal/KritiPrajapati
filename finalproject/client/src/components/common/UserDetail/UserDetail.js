import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import GotoProfileBtn from "../GotoProfileBtn";

import "./styles/UserDetail.scss";

function UserDetail() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="userDetail-container">
      <div className="top-background"></div>
      {user && (
        <>
          <img className="userImg" src={user.avatar} alt={user.fullname} />
          <div className="userName">
            <Link to={`/profile/${user.id}`}>{user.fullName}</Link>
          </div>
          <div className="amount">Account: Rs. {user.amount}</div>
          <GotoProfileBtn userId={user.id} />
        </>
      )}
    </div>
  );
}

export default UserDetail;
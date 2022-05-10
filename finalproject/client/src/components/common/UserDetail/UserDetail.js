import React from "react";
import { useSelector } from "react-redux";

import "./styles/UserDetail.scss";

function UserDetail() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="userDetail-container">
      {user && (
        <>
          <img className="userImg" src={user.avatar} alt={user.fullname} />
          <div className="userName">{user.fullName}</div>
          <div className="amount">Account: Rs. {user.amount}</div>
        </>
      )}
    </div>
  );
}

export default UserDetail;
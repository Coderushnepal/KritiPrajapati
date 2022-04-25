import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

import "./styles/AuthLayout.scss";

function AuthLayout() {
  return (
    <div>
      <Header />
      <div className="main ">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

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
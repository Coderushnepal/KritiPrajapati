import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

import "./styles/AuthLayout.scss";

function AuthLayout() {
  return (
    <div>
      <Header />
      <div className="main ">
        <Outlet />
      <Footer />
      </div>
    </div>
  );
}

export default AuthLayout;
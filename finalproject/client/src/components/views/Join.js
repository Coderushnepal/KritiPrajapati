import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Logo from "../../assets/images/sahayog.svg";
import loginPageImg from "../../assets/images/loginPageImg.svg";

import "./styles/Join.scss";

function Join() {
  return (
    <div className="joinContainer">
      <div className="header">
        <div className="logo ">
          <img src={Logo} alt="sahayog" className="logoImg" />
          <h1 className="logoTitle">Sahayog</h1>
        </div>
      </div>
      <div className="IntroSide">
        <div className="loginImageWrapper">
          <div className="loginImgContainer">
            <img src={loginPageImg} alt="login" className="loginPageImg" />
          </div>
        </div>
      </div>
      <div className="LoginSide">
        <div className="loginSide_div">
          <div className="welcomeContainer">
            <h2 className="welcomeText">
              Hi, Welcome to <span className="title">Sahayog</span>
            </h2>
            <p className="loginInstruction">
              Enter your email and password to login to your account.
            </p>
          </div>
          <Login />
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default Join;
import React, { useState } from "react";
import { signupUser } from "../../services/user";

import "./styles/SignUp.scss";
import InputField from "../common/InputField";
import Button from "../common/Button";
import Modal from "../common/Modal";

import LogoSvg from "../../assets/images/sahayog.svg";

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const initialState = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    let isSuccess = await signupUser(data);
    if (isSuccess) {
      setIsOpen(false);
    }
  };

  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="signUpContainer">
      <div className="signupText">
        Haven't joined yet?{" "}
        <button className="signUpLinkBtn" onClick={handleShow}>
          Sign Up
        </button>
      </div>
      <Modal show={isOpen} handleClose={handleClose}>
        <div className="logo ">
          <h1 className="logoTitle">
            <img src={LogoSvg} alt="sahayog" className="logoImg" />
            Sahayog
          </h1>
        </div>
        <div className="welcomeText">
          Glad to have you. Please enter your details below to sign up with us
          and give and receive sahayog.
        </div>
        <div>
          <InputField
            label="Full Name"
            labelClass={"bold"}
            name="fullName"
            value={data.fullName}
            handleOnChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <InputField
            type="number"
            label="Phone Number"
            labelClass={"bold"}
            value={data.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            handleOnChange={handleInputChange}
            placeholder={"Enter your Phone number"}
          />
        </div>
        <div>
          <InputField
            label="Email"
            labelClass={"bold"}
            placeholder={"Enter your email address"}
            value={data.email}
            name="email"
            handleOnChange={handleInputChange}
          />
        </div>
        <div>
          <InputField
            label="Password"
            labelClass={"bold"}
            placeholder={"Enter your password"}
            value={data.password}
            name="password"
            handleOnChange={handleInputChange}
          />
        </div>
        <div>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;

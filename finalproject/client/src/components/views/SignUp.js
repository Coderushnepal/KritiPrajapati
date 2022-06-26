import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../common/Modal";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { signupUser } from "../../actions/users";
import LogoSvg from "../../assets/images/sahayog.svg";
import {
  emailValidator,
  lengthValidator,
  requiredValidator,
} from "../../utils/validators";

import "./styles/SignUp.scss";

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const initialState = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    let isAllFormDataValid = true;
    let tempErrors = {};

    if (!requiredValidator(data.fullName)) {
      tempErrors.fullName = "Full Name is required";
      isAllFormDataValid = false;
    }
    if (!requiredValidator(data.phoneNumber)) {
      tempErrors.phoneNumber = "Phone number is required";
      isAllFormDataValid = false;
    } else if (!lengthValidator(data.phoneNumber, 9, 11)) {
      tempErrors.phoneNumber = "Phone number length must be 10.";
      isAllFormDataValid = false;
    }
    if (!requiredValidator(data.email)) {
      tempErrors.email = "Email is required";
      isAllFormDataValid = false;
    } else if (!emailValidator(data.email)) {
      tempErrors.email = "Email is invalid";
      isAllFormDataValid = false;
    }
    if (!requiredValidator(data.password)) {
      tempErrors.password = "Password is required";
      isAllFormDataValid = false;
    } else if (!lengthValidator(data.password, 8)) {
      tempErrors.password = "Password length must be greater than 8";
      isAllFormDataValid = false;
    }
    setErrors(tempErrors);

    if (isAllFormDataValid) {
      dispatch(signupUser(data));
      handleClose();
    }
  };

  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setData(initialState);
    setErrors({});
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
        <div className="signUPModal">
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
              name="fullName"
              value={data.fullName}
              handleOnChange={onChangeHandler}
              placeholder="Enter your full name"
              errors={errors}
            />
          </div>
          <div>
            <InputField
              type="number"
              label="Phone Number"
              value={data.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              handleOnChange={onChangeHandler}
              placeholder={"Enter your Phone number"}
              errors={errors}
            />
          </div>
          <div>
            <InputField
              label="Email"
              placeholder={"Enter your email address"}
              value={data.email}
              name="email"
              handleOnChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div>
            <InputField
              label="Password"
              placeholder={"Enter your password"}
              value={data.password}
              name="password"
              handleOnChange={onChangeHandler}
              errors={errors}
              type="password"
            />
          </div>
          <div>
            <Button onClick={handleSignUp}>Sign Up</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
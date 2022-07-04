import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../common/Button";
import InputField from "../common/InputField";
import { loginUser } from "../../actions/users";
import {
  emailValidator,
  requiredValidator,
} from "../../utils/validators";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let isAllFormDataValid = true;
      let tempErrors = {};

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
      }
      setErrors(tempErrors);

      if (isAllFormDataValid) {
        dispatch(loginUser(data, navigate));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputField
          name={"email"}
          label={"Email"}
          value={data.email}
          labelClass="text-black"
          handleOnChange={onChangeHandler}
          placeholder="Enter your email"
          errors={errors}
        />
        <InputField
          name={"password"}
          label={"Password"}
          labelClass="text-black"
          value={data.password}
          type={"password"}
          handleOnChange={onChangeHandler}
          placeholder="Enter your password"
          errors={errors}
        />
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
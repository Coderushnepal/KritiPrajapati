import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/users";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useNavigate } from "react-router";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(loginUser(data, navigate));
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
        />
        <InputField
          name={"password"}
          label={"Password"}
          labelClass="text-black"
          value={data.password}
          type={"password"}
          handleOnChange={onChangeHandler}
          placeholder="Enter your password"
        />
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;

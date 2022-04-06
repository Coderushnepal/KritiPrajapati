import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/users";

function Login() {
  const dispatch= useDispatch();
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
      dispatch(loginUser(data))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={onChangeHandler}
          value={data.email}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={onChangeHandler}
          value={data.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

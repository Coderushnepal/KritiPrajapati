import axios from "axios";
import React, { useState } from "react";

function Login() {
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
      const response = await axios.post(
        "http://localhost:8849" + "/login",
        data
      );
      const { token, user } = response.data.data;
      localStorage.setItem("userToken", token);
      // store user in Redux
      console.log(response);
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

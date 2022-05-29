import axios from "axios";
import { toast } from "react-toastify";

import config from "../config";
import { interpolate } from "../utils/string";

export const signupUser = async (data) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.signup}`;
    const response = await axios.post(url, data);
    toast.success("Added user successfully");
    return response;
  } catch (error) {
    let errorList = error.response.data.details;
    let errorMsg = error.response.data.message;
    if (errorList) {
      errorList.forEach((error) => {
        toast.error(error);
      });
    }
    if (errorMsg) {
      toast.error(errorMsg);
    }
  }
};

export const loginUser = async (data) => {
  const url = `${config.apiUrl}${config.endpoints.login}`;
  const response = await axios.post(url, data);
  const { token, user } = response.data.data;
  localStorage.setItem("userToken", token);
  toast.success("login successful");
  return {
    ...user,
    token: token,
  };
};

export const logoutUser = async () => {
  localStorage.removeItem("userToken");
};

export const fetchUser = async () => {
  let token = localStorage.getItem("userToken");
  if (token) {
    const url = `${config.apiUrl}${config.endpoints.me}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
};

export const updateProfile = async (data) => {
  const url = `${config.apiUrl}${config.endpoints.me}`;
  const response = await axios(url, {
    method: "patch",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    data: data,
  });
  toast.success("update successful");
  return response;
};

export const fetchUserProfile = async (id) => {
  let token = localStorage.getItem("userToken");
  if (token) {
    const url = `${config.apiUrl}${config.endpoints.userProfile}`;
    const response = await axios.get(interpolate(url, { id }), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(response, "response");
    return response;
  }
};
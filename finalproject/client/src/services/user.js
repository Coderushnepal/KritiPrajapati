import axios from "axios";
import config from "../config";
import { toast } from "react-toastify";

export const signupUser = async (data) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.signup}`;
    const response = await axios.post(url, data);

    toast.success("signup successful");
    return {
      response,
    };
  } catch (error) {
    toast.error(error.response?.data?.details || "Something went wrong!");
  }
}

export const loginUser = async (data) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.login}`;
    const response = await axios.post(url, data);

    const { token, user } = response.data.data;
    localStorage.setItem("userToken", token);
    toast.success("login successful");
    return {
      ...user,
      ...token,
    };
  } catch (error) {
    toast.error(error.response?.data?.details || "Something went wrong!");
  }
}

export const logoutUser = async () => {
  try {
    localStorage.removeItem("userToken");

    toast.success("logout successful");
    return true;
  } catch (error) {
    toast.error(error.response?.data?.details || "Something went wrong!");
    return false;
  }
};

export const fetchUser = async () => {
  try {
    const url = `${config.apiUrl}${config.endpoints.me}`;
    const response = await axios.get(url,{
      headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
  });
    return response;
  } catch (error) {
    toast.error(error.response?.data?.details || "Something went wrong!");
  }
};


export const updateUser = async (data) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.me}`;
    const response = await axios.put(url, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
  },data);

    toast.success("update successful");
    return {
      response,
    };
  } catch (error) {
    toast.error(error.response?.data?.details || "Something went wrong!");
  }
}

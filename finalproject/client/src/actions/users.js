import { toast } from "react-toastify";
import * as userService from "../services/user";

export const FETCH_USER = "FETCH_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";

export function signupUser(userDetail) {
  return async function (dispatch) {
    try {
      const data = await userService.signupUser(userDetail);
      dispatch(signup(data));
      return true;
    } catch (error) {
      toast.error(error.response?.data?.details || "Something went wrong!");
    }
  };
}

export function loginUser(credential, navigate) {
  return async function (dispatch) {
    try {
      const data = await userService.loginUser(credential);
      dispatch(login(data));
      navigate("/feed");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
}

export function logoutUser() {
  return async function (dispatch) {
    try {
      await userService.logoutUser();
      dispatch(logout());
    } catch (error) {
      toast.error(error.response?.data?.details || "Something went wrong!");
    }
  };
}

export function fetchUser() {
  return async function (dispatch) {
    try {
      let token = localStorage.getItem("userToken");
      if (token) {
        const response = await userService.fetchUser();
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      toast.error(error.response?.data?.details || "Something went wrong!");
      if(error.response.status===401){{
        dispatch(logoutUser());
      }

      }
      console.log(error.response, 'Error')
    }
  };
}

export function fetchUserProfile(userId) {
  return async function (dispatch) {
    try {
      let token = localStorage.getItem("userToken");
      if (token) {
        dispatch(setLoading(true));
        const response = await userService.fetchUserProfile(userId);
        dispatch(setUserProfile(response.data.data));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(error.response?.data?.details || "Something went wrong!");
    }
  };
}

export function updateProfile(data) {
  return async function (dispatch) {
    try {
      const response = await userService.updateProfile(data);
      dispatch(editProfile(response.data.data));
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
}

const signup = (data) => {
  return {
    type: SIGNUP_USER,
    payload: data,
  };
};

const login = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

const setUser = (data) => {
  return {
    type: FETCH_USER,
    payload: data,
  };
};

const setUserProfile = (data) => {
  return {
    type: SET_USER_PROFILE,
    payload: data,
  };
};

const setLoading = (data) => {
  return {
    type: SET_PROFILE_LOADING,
    payload: data,
  };
};

const editProfile = (data) => {
  return {
    type: UPDATE_PROFILE,
    payload: data,
  };
};
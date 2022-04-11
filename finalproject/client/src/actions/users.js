import * as userService from "../services/user";

export const FETCH_USER = "FETCH_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_USER = "UPDATE_USER";


export function signupUser(userDetail) {
  return async function (dispatch) {
    try {
      const data = await userService.signupUser(userDetail);
      dispatch(signup(data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function loginUser(credential) {
  return async function (dispatch) {
    try {
      const data = await userService.loginUser(credential);
      dispatch(login(data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function logoutUser() {
  return async function (dispatch) {
    try {
      const isLogout = await userService.logoutUser();
      if (isLogout) {
        dispatch(logout());
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchUser() {
  return async function (dispatch) {
    try {
      const response = await userService.fetchUser();
      console.log(response)
      dispatch(setUser(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };
}

const signup = (data) => {
  return {
    type: SIGNUP_USER,
    payload: data,
  };
}

const login = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

const logout = () => {
  return {
    type: LOGOUT_USER,
  };
}

const setUser = (data) => {
  console.log(data)
  return {
   
    type: FETCH_USER,
    payload: data,
  };
}

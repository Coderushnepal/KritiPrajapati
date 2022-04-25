import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  FETCH_USER,
} from "../actions/users";

const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
};

export default function fetchUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { 
        ...state, 
        user: { ...state.user, ...action.payload },
        isLoggedIn: true 
      };

    case SIGNUP_USER:
      return { ...state, user: action.payload };

    case LOGOUT_USER:
      return { ...state, user: {}, isLoggedIn: false };

    case FETCH_USER:
      return { ...state, user: action.payload, isLoggedIn: true };

    default:
      return state;
  }
}

import { DONATE_POST } from "../actions/posts";
import {
 LOGIN_USER,
 LOGOUT_USER,
 SIGNUP_USER,
 FETCH_USER,
 SET_USER_PROFILE,
 SET_PROFILE_LOADING,
} from "../actions/users";
 
const INITIAL_STATE = {
 loading: true,
 isUserLoaded: false,
 user: {},
 profile: {},
 isLoggedIn: false,
};
 
export default function fetchUsers(state = INITIAL_STATE, action) {
 switch (action.type) {
   case LOGIN_USER:
     return {
       ...state,
       user: { ...state.user, ...action.payload },
       isLoggedIn: true,
       isUserLoaded: true
     };
 
   case SIGNUP_USER:
     return { ...state, user: action.payload };
 
   case LOGOUT_USER:
     return { ...state, user: {}, isLoggedIn: false, isUserLoaded: false };
 
   case FETCH_USER:
     return { ...state, user: action.payload, isLoggedIn: true ,  isUserLoaded: true };
 
   case DONATE_POST:
     console.log(action.payload);
     return {
       ...state,
       user: {
         ...state.user,
         amount: state.user.amount - action.payload.amount,
       },
     };
   case SET_USER_PROFILE:
     return {
       ...state,
       profile: action.payload,
     };
 
   case SET_PROFILE_LOADING:
     return {
       ...state,
       loading: action.payload,
     };
   default:
     return state;
 }
}
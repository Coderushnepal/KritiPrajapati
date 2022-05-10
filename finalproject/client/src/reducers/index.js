import { combineReducers } from "redux";

import postReducer from "./posts";
import userReducer from "./users";

export default combineReducers({
  post: postReducer,
  user: userReducer,
});
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// combineReducers 통해 reducers 묶기
const rootReducer = combineReducers({
  user,
  post
});

export default rootReducer;

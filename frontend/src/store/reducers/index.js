import { combineReducers } from "redux";
import status from "./status";
import auth from "./auth";

const reducers = combineReducers({
  status,
  auth,
});

export default reducers;

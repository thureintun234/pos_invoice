import { combineReducers } from "redux";
import status from "./status";
import auth from "./auth";
import invoice from "./invoice";

const reducers = combineReducers({
  status,
  auth,
  invoice,
});

export default reducers;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const DEFAULT_STATE = {};

const store = createStore(
  reducers,
  DEFAULT_STATE,
  compose(applyMiddleware(thunk))
);

export default store;

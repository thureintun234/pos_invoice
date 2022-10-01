import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { setAccessToken } from "./service/api";
import { getUser } from "./store/actions";
import { SET_CURRENT_USER } from "./store/types";

// recact notify
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// token take from local storage after every rendering
const token = localStorage.getItem("jwtToken");
if (token) {
  setAccessToken(token);
  store.dispatch(getUser());
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: token,
  });
}

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

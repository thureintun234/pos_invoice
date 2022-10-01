import { SET_CURRENT_USER } from "../types";
import { addError, removeError } from "./error";
import { setLoading } from "./loading";
import { setAccessToken } from "../../service/api";
import { call } from "../../service/api";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const setToken = (token) => setAccessToken(token);

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    setAccessToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};

export const authUser = (data) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await call("post", "users/login", data);
     
      const user = response.user;
      const { token } = response;

      localStorage.setItem("jwtToken", token);
      setAccessToken(token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (error) {
      alert("Login Failed");
      localStorage.removeItem("jwtToken");
      dispatch(setCurrentUser({}));
    }
    dispatch(setLoading());
  };
};

export const getUser = () => {
  
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await call("get", "users/me");

      const user = response;

      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading());
  };
};

import {
  SHOW_INVOICES,
  SHOW_INVOICE,
  CREATE_INVOICES,
  UPDATE_INVOICES,
  FILTER_INVOICES,
  SET_SUCCESS,
  SET_LOADING,
  ADD_ERROR,
  REMOVE_ERROR,
} from "../types";
import { call } from "../../service/api";

export const showInvoices = (invoices) => ({
  type: SHOW_INVOICES,
  invoices,
});

export const showInvoice = (invoice) => ({
  type: SHOW_INVOICE,
  invoice,
});

export const createInvoice = (invoice) => ({
  type: CREATE_INVOICES,
  invoice,
});

export const editInvoice = (data) => ({
  type: UPDATE_INVOICES,
  data,
});

export const filterInvoices = (id) => ({
  type: FILTER_INVOICES,
  id,
});

export const getInvoices = () => {
  return async (dispatch) => {
    dispatch({ type: SET_SUCCESS, payload: false });
    dispatch({ type: SET_LOADING });

    try {
      const response = await call("get", `invoices`);
      const result = response.map((invoice) => {
        return { ...invoice, key: invoice._id };
      });

      dispatch(showInvoices(result));
      dispatch({ type: SET_SUCCESS, payload: true });
      dispatch({ type: REMOVE_ERROR });
    } catch (error) {
      dispatch({ type: ADD_ERROR, payload: error });
    }
    dispatch({ type: SET_LOADING });
  };
};

export const saveInvoice = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_SUCCESS, payload: false });
    dispatch({ type: SET_LOADING });

    try {
      const response = await call("post", "invoices", data);
      const result = { ...response.invoice, key: response.invoice._id };

      dispatch(createInvoice(result));
      dispatch({ type: SET_SUCCESS, payload: true });
      dispatch({ type: REMOVE_ERROR });
    } catch (error) {
      dispatch({ type: ADD_ERROR, payload: error });
    }
    dispatch({ type: SET_LOADING });
  };
};

export const getUserAccount = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await call("get", `invoices/${id}`);
      const result = response;

      dispatch(showInvoice(result));
      dispatch({ type: REMOVE_ERROR });
    } catch (error) {
      dispatch({ type: ADD_ERROR, payload: error });
    }
    dispatch({ type: SET_LOADING });
  };
};

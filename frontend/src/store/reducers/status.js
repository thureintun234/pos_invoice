import {
  SET_DELETE,
  SET_DELETE_SUCCESS,
  SET_LOADING,
  SET_SUCCESS,
} from "../types";
const initialState = {
  loading: false,
  success: false,
  delete: false,
  deleteSuccess: false,
};
const status = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case SET_DELETE:
      return {
        ...state,
        delete: action.payload,
      };
    case SET_DELETE_SUCCESS:
      return {
        ...state,
        deleteSuccess: action.payload,
      };
    default:
      return state;
  }
};
export default status;

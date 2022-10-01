import {
  SHOW_INVOICE,
  SHOW_INVOICES,
  CREATE_INVOICES,
  UPDATE_INVOICES,
  FILTER_INVOICES,
} from "../types";

const initialState = {
  invoices: [],
  invoice: {},
  error: [],
  isSuccess: false,
};

const invoice = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INVOICES:
      return {
        ...state,
        error: [],
        isSuccess: true,
        invoices: [action.invoice, ...state.invoices],
      };
    case SHOW_INVOICES:
      return { ...state, invoices: action.invoices };
    case SHOW_INVOICE:
      const filteredInvoice = state.invoices.find(
        (inv) => inv._id === action.invoice._id
      );
      return { ...state, invoice: filteredInvoice };
    case UPDATE_INVOICES:
      const index = state.invoices.findIndex(
        (inv) => inv._id === action.data._id
      );
      state.invoices[index] = action.data;
      return { ...state };
    case FILTER_INVOICES:
      const filterInvoice = state.invoices.filter(
        (inv) => inv._id !== action._id
      );
      return { ...state, error: [], isSuccess: true, invoices: filterInvoice };
    default:
      return state;
  }
};

export default invoice;

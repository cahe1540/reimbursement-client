import { modalConstants } from "../../constants/index";

const initialState = {
  data: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalConstants.MANAGER_UPDATES_REIMBURSEMENT:
      return {
        ...state,
        data: action.payload,
      };
    case modalConstants.CLEAR_MODAL_DATA:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default modalReducer;

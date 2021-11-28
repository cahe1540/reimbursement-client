import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import userReducer from "./userReducer";
import userReimbursementReducer from "./userReimbursementReducer";
import modalReducer from "./modalReducer";

const reducers = combineReducers({
  user: userReducer,
  userReimbursements: userReimbursementReducer,
  employees: employeeReducer,
  modalData: modalReducer,
});

export default reducers;

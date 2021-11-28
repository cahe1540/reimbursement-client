import { employeeConstants } from "../../constants";
import { employeeIdToNames } from "../../utils/functions";

const initialState = {
  loading: false,
  employees: {},
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case employeeConstants.FETCH_ALL_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case employeeConstants.FETCH_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: employeeIdToNames(action.payload),
        error: "",
      };
    case employeeConstants.FETCH_ALL_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;

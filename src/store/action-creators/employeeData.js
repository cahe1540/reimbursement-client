import axios from "axios";
import { employeeConstants } from "../../constants";
import { EC2SERVER } from "../../constants/urlConstants";

const fetchAllEmployeesRequest = () => {
  return {
    type: employeeConstants.FETCH_ALL_EMPLOYEES_REQUEST,
  };
};

const fetchAllEmployeesSuccess = (employees) => {
  return {
    type: employeeConstants.FETCH_ALL_EMPLOYEES_SUCCESS,
    payload: employees,
  };
};

const fetchAllEmployeesFailure = (error) => {
  return {
    type: employeeConstants.FETCH_ALL_EMPLOYEES_FAILURE,
    payload: error,
  };
};

export const fetchAllEmployees = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchAllEmployeesRequest());
      const employees = await axios.get(`http://${EC2SERVER}/employees`);
      dispatch(fetchAllEmployeesSuccess(employees.data.data));
    } catch (err) {
      dispatch(fetchAllEmployeesFailure(err));
    }
  };
};

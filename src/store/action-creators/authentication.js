import axios from "axios";
import { authConstants } from "../../constants/index";
import { EC2SERVER } from "../../constants/urlConstants";

const fetchUsersRequest = () => {
  return {
    type: authConstants.FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: authConstants.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: authConstants.FETCH_USERS_FAILURE,
    payload: error,
  };
};

const logUserOut = (user) => {
  return {
    type: authConstants.LOG_USER_OUT,
    user: user,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const user = await axios.get(
        `http://${EC2SERVER}/users/login?user_name=${username}&password=${password}`
      );
      dispatch(fetchUsersSuccess(user.data));
    } catch (err) {
      dispatch(fetchUsersFailure(err));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(
      logUserOut({
        loading: false,
        user: null,
        error: null,
      })
    );
  };
};

import { authConstants } from "../../constants/index";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case authConstants.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case authConstants.LOG_USER_OUT:
      return {
        ...state,
        loading: false,
        user: null,
        error: "",
      };
    default:
      return state;
  }
};

export default userReducer;

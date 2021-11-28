import { userReimbursementConstants } from "../../constants/index";
import { findAndReplace } from "../../utils/functions";

const initialState = {
  pending: true,
  loading: false,
  reimbursements: [],
  error: null,
  isSuccessful: null,
};

const userReimbursementReducer = (state = initialState, action) => {
  switch (action.type) {
    case userReimbursementConstants.UPDATE_REIMBURSEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userReimbursementConstants.UPDATE_REIMBURSEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        reimbursements: findAndReplace(state.reimbursements, action.payload),
      };
    case userReimbursementConstants.UPDATE_REIMBURSEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userReimbursementConstants.FETCH_USER_REIMBURSEMENTS_REQUEST:
      return {
        ...state,
        pending: false,
        loading: true,
        error: null,
      };
    case userReimbursementConstants.FETCH_USER_REIMBURSEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reimbursements: action.payload.sort(
          (a, b) => b.createdAt - a.createdAt
        ),
        error: null,
      };
    case userReimbursementConstants.FETCH_USER_REIMBURSEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userReimbursementConstants.DELETE_USER_REIMBURSEMENTS_REQUEST:
      return {
        ...state,
        pending: false,
        loading: true,
        error: null,
      };
    case userReimbursementConstants.DELETE_USER_REIMBURSEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reimbursements: state.reimbursements.filter((r) => {
          return r.reimbursementId !== action.payload;
        }),
        isSuccessful: true,
        error: null,
      };
    case userReimbursementConstants.DELETE_USER_REIMBURSEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userReimbursementConstants.CREATE_USER_REIMBURSEMENT_REQUEST:
      return {
        ...state,
        pending: false,
        loading: true,
        error: null,
        isSuccessful: true,
      };
    case userReimbursementConstants.CREATE_USER_REIMBURSEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        reimbursements: [action.payload, ...state.reimbursements],
      };
    case userReimbursementConstants.CREATE_USER_REIMBURSEMENT_SUCCESS_RESET:
      return {
        ...state,
        isSuccessful: action.payload,
      };
    case userReimbursementConstants.FETCH_ALL_REIMBURSEMENTS_REQUEST:
      return {
        ...state,
        pending: false,
        loading: true,
        error: null,
      };
    case userReimbursementConstants.FETCH_ALL_REIMBURSEMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        loading: false,
        reimbursements: action.payload,
      };
    case userReimbursementConstants.FETCH_ALL_REIMBURSEMENTS_FAILURE:
      return {
        ...state,
        pending: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReimbursementReducer;

import axios from "axios";
import { userReimbursementConstants } from "../../constants/index";
import { EC2SERVER } from "../../constants/urlConstants";

const fetchUserReimbursementRequest = () => {
  return {
    type: userReimbursementConstants.FETCH_USER_REIMBURSEMENTS_REQUEST,
  };
};

const fetchUserReimbursementSuccess = (reimbursements) => {
  return {
    type: userReimbursementConstants.FETCH_USER_REIMBURSEMENTS_SUCCESS,
    payload: reimbursements,
  };
};

const fetchUserReimbursementFailure = (error) => {
  return {
    type: userReimbursementConstants.FETCH_USER_REIMBURSEMENTS_FAILURE,
    payload: error,
  };
};

const deleteUserReimbursementRequest = () => {
  return {
    type: userReimbursementConstants.DELETE_USER_REIMBURSEMENTS_REQUEST,
  };
};

const deleteUserReimbursementSuccess = (id) => {
  return {
    type: userReimbursementConstants.DELETE_USER_REIMBURSEMENTS_SUCCESS,
    payload: id,
  };
};

const deleteUserReimbursementFailure = (error) => {
  return {
    type: userReimbursementConstants.DELETE_USER_REIMBURSEMENTS_FAILURE,
    payload: error,
  };
};

const createUserReimbursementRequest = () => {
  return {
    type: userReimbursementConstants.CREATE_USER_REIMBURSEMENT_REQUEST,
  };
};

const createUserReimbursementSuccess = (reimbursement) => {
  return {
    type: userReimbursementConstants.CREATE_USER_REIMBURSEMENT_SUCCESS,
    payload: reimbursement,
  };
};

const createUserReimbursementFailure = (error) => {
  return {
    type: userReimbursementConstants.CREATE_USER_REIMBURSEMENT_FAILURE,
    payload: error,
  };
};

const fetchAllReimbursementsRequest = () => {
  return {
    type: userReimbursementConstants.FETCH_ALL_REIMBURSEMENTS_REQUEST,
  };
};

const fetchAllReimbursementsSuccess = (reimbursements) => {
  return {
    type: userReimbursementConstants.FETCH_ALL_REIMBURSEMENTS_SUCCESS,
    payload: reimbursements,
  };
};

const fetchAllReimbursementsFailure = (error) => {
  return {
    type: userReimbursementConstants.FETCH_ALL_REIMBURSEMENTS_FAILURE,
    payload: error,
  };
};

const resetSuccess = () => {
  return {
    type: userReimbursementConstants.CREATE_USER_REIMBURSEMENT_SUCCESS_RESET,
    payload: null,
  };
};

const updateReimbursementRequest = () => {
  return {
    type: userReimbursementConstants.UPDATE_REIMBURSEMENT_REQUEST,
  };
};

const updateReimbursementSuccess = (reimbursement) => {
  return {
    type: userReimbursementConstants.UPDATE_REIMBURSEMENT_SUCCESS,
    payload: reimbursement,
  };
};

const updateReimbursementFailure = (error) => {
  return {
    type: userReimbursementConstants.UPDATE_REIMBURSEMENT_FAILURE,
    payload: error,
  };
};

export const updateReimbursement = (
  managerId,
  reimbursementId,
  reimbursement
) => {
  return async (dispatch) => {
    dispatch(updateReimbursementRequest());
    try {
      const response = await axios.patch(
        `http://${EC2SERVER}/managers/${managerId}/reimbursements/${reimbursementId}`,
        reimbursement
      );
      dispatch(updateReimbursementSuccess(response.data.data));
    } catch (err) {
      dispatch(updateReimbursementFailure(err));
    }
  };
};

export const fetchAllReimbursements = () => {
  return async (dispatch) => {
    dispatch(fetchAllReimbursementsRequest());
    try {
      const response = await axios.get(`http://${EC2SERVER}/reimbursements`);
      dispatch(fetchAllReimbursementsSuccess(response.data.data));
    } catch (err) {
      dispatch(fetchAllReimbursementsFailure(err));
    }
  };
};

export const fetchUserReimbursements = (workerId) => {
  return async (dispatch) => {
    dispatch(fetchUserReimbursementRequest());
    try {
      const response = await axios.get(
        `http://${EC2SERVER}/employees/${workerId}/reimbursements`
      );
      dispatch(fetchUserReimbursementSuccess(response.data.data));
    } catch (err) {
      dispatch(fetchUserReimbursementFailure(err));
    }
  };
};

export const deleteReimbursement = (employeeId, reimbursementId) => {
  return async (dispatch) => {
    dispatch(deleteUserReimbursementRequest());
    try {
      await axios.delete(
        `http://${EC2SERVER}/employees/${employeeId}/reimbursements/${reimbursementId}`
      );
      dispatch(deleteUserReimbursementSuccess(reimbursementId));
      setTimeout(() => {
        dispatch(resetSuccess());
      }, 1000);
    } catch (err) {
      dispatch(deleteUserReimbursementFailure(err));
    }
  };
};

export const createReimbursement = (reimbursement) => {
  return async (dispatch) => {
    dispatch(createUserReimbursementRequest());
    try {
      const response = await axios.post(
        `http://${EC2SERVER}/reimbursements`,
        reimbursement
      );
      dispatch(createUserReimbursementSuccess(response.data.data));
      setTimeout(() => {
        dispatch(resetSuccess());
      }, 1000);
    } catch (err) {
      dispatch(createUserReimbursementFailure(err));
    }
  };
};

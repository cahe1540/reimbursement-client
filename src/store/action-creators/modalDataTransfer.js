import { modalConstants } from "../../constants/index";

export const modalDataTransfer = (data) => {
  return {
    type: modalConstants.MANAGER_UPDATES_REIMBURSEMENT,
    payload: data,
  };
};

export const clearModalData = () => {
  return {
    type: modalConstants.CLEAR_MODAL_DATA,
    payload: null,
  };
};

import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "../../store/action-creators/index";
import { approvalAsColor } from "../../utils/functions";

export const ManagerReimbursementCell = ({ reimbursement, workers }) => {
  const dispatch = useDispatch();
  const { modalDataTransfer } = bindActionCreators(modalActions, dispatch);
  return (
    <tr className={approvalAsColor(reimbursement.state)}>
      <th scope="row" colSpan="2">
        {workers[reimbursement.employeeId]}
      </th>
      <td colSpan="2">{reimbursement.reason} </td>
      <td></td>
      <td>{reimbursement.amount.toFixed(2)}</td>
      <td>{reimbursement.state}</td>
      <td>
        {reimbursement.state === "pending" ? (
          <button
            className="btn btn-primary bg-info no-border btn-sm"
            id="update-btn"
            data-toggle="modal"
            data-target="#approveModal"
            data-id={reimbursement.reimbursementId}
            onClick={() => modalDataTransfer(reimbursement)}
          >
            Decide
          </button>
        ) : null}
      </td>
    </tr>
  );
};

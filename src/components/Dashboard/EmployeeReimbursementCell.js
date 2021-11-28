import React from "react";

const determineCellBg = (status) => {
  if (status === "approved") return "bg-granted";
  if (status === "pending") return "bg-pending";
  return "bg-denied";
};

export const EmployeeReimbursementCell = ({
  user,
  reimbursement,
  deleteReimbursement,
}) => {
  return (
    <tr className={determineCellBg(reimbursement.state)}>
      <th scope="row">{reimbursement.reimbursementId}</th>
      <td colSpan="1">{reimbursement.reason} </td>
      <td>{reimbursement.amount.toFixed(2)}</td>
      <td>{reimbursement.state}</td>
      <td>
        {reimbursement.managerMessage ? reimbursement.managerMessage : ""}
      </td>
      <td>
        {reimbursement.state === "pending" ? (
          <button
            className={`btn btn-primary bg-danger no-border btn-sm`}
            id="delete-btn"
            data-id={reimbursement.reimbursementId}
            onClick={() => {
              deleteReimbursement(
                user.user.data.workerId,
                reimbursement.reimbursementId
              );
            }}
          >
            Delete
          </button>
        ) : null}
      </td>
    </tr>
  );
};

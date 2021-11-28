import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userReimbursementActions } from "../../store/action-creators/index";
import { EmployeeReimbursementCell } from "./EmployeeReimbursementCell";
import { FailMessage } from "./FailMessage";
import { SuccessMessage } from "./SuccessMessage";

function EmployeeReimbursements() {
  const { user, userReimbursements } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { fetchUserReimbursements, deleteReimbursement } = bindActionCreators(
    userReimbursementActions,
    dispatch
  );

  useEffect(() => {
    fetchUserReimbursements(user.user.data.workerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userReimbursements.loading || userReimbursements.pending)
    return <i className="fas fa-circle-notch fa-spin" id="spinner"></i>;

  return (
    <>
      <SuccessMessage isSuccessful={userReimbursements.isSuccessful} />
      <FailMessage error={userReimbursements.error} />
      <table
        className="table table-hover border table-fixed"
        id="my-reimbursement-table"
      >
        <thead>
          <tr>
            <th colSpan="5">My Reimbursement Requests</th>
            <th>
              <button
                className="btn btn-success no-border btn-sm"
                data-toggle="modal"
                data-target="#createModal"
                id="create-new-btn"
              >
                +New
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Reason</th>
            <th scope="col">Amount</th>
            <th scope="col">
              Status{" "}
              <i
                className="fas fa-caret-down"
                id="sort-desc"
                //onClick="sortTableByStatus(event)"
              ></i>
              <i
                className="fas fa-caret-up"
                id="sort-asc"
                //onclick="sortTableByStatus(event)"
              ></i>
            </th>
            <th scope="col">Message</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userReimbursements.reimbursements.map((r) => (
            <EmployeeReimbursementCell
              user={user}
              reimbursement={r}
              deleteReimbursement={deleteReimbursement}
              key={r.reimbursementId}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeReimbursements;

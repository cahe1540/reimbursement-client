import React, { useEffect } from "react";
import {
  userReimbursementActions,
  employeeActions,
} from "../../store/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { SuccessMessage } from "./SuccessMessage";
import { FailMessage } from "./FailMessage";
import { ManagerReimbursementCell } from "./ManagerReimbursementCell";

function ManagerReimbursements() {
  const { user, userReimbursements, employees } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { fetchAllReimbursements, fetchAllEmployees } = bindActionCreators(
    { ...userReimbursementActions, ...employeeActions },
    dispatch
  );

  useEffect(() => {
    fetchAllReimbursements();
    fetchAllEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SuccessMessage isSuccessful={false} />
      <FailMessage error={null} />
      <table
        className="table table-hover border table-fixed"
        id="reimbursement-table"
      >
        <thead>
          <tr>
            <th colSpan="8">All Reimbursements</th>
          </tr>
          <tr>
            <th scope="col" colSpan="2">
              Name
            </th>
            <th scope="col" colSpan="2">
              Reason
            </th>
            <th></th>
            <th scope="col">Amount</th>
            <th scope="col">
              Status{" "}
              <i
                className="fas fa-caret-down"
                id="sort-desc"
                //onclick="sortTableByStatus(event)"
              ></i>
              <i
                className="fas fa-caret-up"
                id="sort-asc"
                //onclick="sortTableByStatus(event)"
              ></i>
            </th>
            <th scope="col">Deny/Accept</th>
          </tr>
        </thead>
        <tbody>
          {userReimbursements.reimbursements.map((r) => {
            return (
              <ManagerReimbursementCell
                reimbursement={r}
                workers={employees.employees}
                user={user.user.data.workerId}
                q={r.reimbursementId}
                key={r.reimbursementId}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ManagerReimbursements;

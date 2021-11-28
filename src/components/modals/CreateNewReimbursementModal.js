import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { userReimbursementActions } from "../../store/action-creators";
import { Reimbursement } from "../../dataModels/Reimbursement";
import { isAmountValid } from "../../utils/functions";

const CreateNewReimbursementModal = () => {
  const { userReimbursements, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { createReimbursement } = bindActionCreators(
    userReimbursementActions,
    dispatch
  );

  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

  const handleSubmit = () => {
    setSubmitBtnClicked(true);

    const reimbursement = new Reimbursement({
      amount: amount,
      reason: message,
      employeeId: user.user.data.workerId,
    });
    createReimbursement(reimbursement);
    if (!userReimbursements.reimbursements.error) {
      setAmount("");
      setMessage("");
      setSubmitBtnClicked(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="createModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              id="x-btn"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="reimbursement-amount">
                  Reimbursement Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="form-amount"
                  placeholder="Enter amount..."
                  required
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div
                  className={`alert alert-danger invalid-input-warn ${
                    !isAmountValid(amount) && submitBtnClicked ? "" : "hidden"
                  }`}
                  id="modal-warning"
                >
                  Amount may not be empty.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="reason"> Reason </label>
                <textarea
                  className="form-control"
                  maxLength="80"
                  id="form-reason"
                  rows="2"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              id="modal-close-btn"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="submit-my-form"
              data-dismiss="modal"
              disabled={
                !isAmountValid(amount) || !message || userReimbursements.pending
              }
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewReimbursementModal;

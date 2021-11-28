import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {
  modalActions,
  userReimbursementActions,
} from "../../store/action-creators";

export const ApproveReimbursementModal = () => {
  const { user, modalData } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { clearModalData, updateReimbursement } = bindActionCreators(
    { ...modalActions, ...userReimbursementActions },
    dispatch
  );

  const [approve, setApprove] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    updateReimbursement(
      user.user.data.workerId,
      modalData.data.reimbursementId,
      { state: approve ? "approved" : "denied", message: message }
    );
    setApprove(false);
    setMessage("");
    clearModalData();
  };

  return (
    <div
      className="modal fade"
      id="approveModal"
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
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-approve"
                    value="approve"
                    checked={approve === true}
                    onChange={() => setApprove(true)}
                  />
                  <label className="form-check-label" htmlFor="radio-approve">
                    Approve
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-deny"
                    value="deny"
                    checked={approve === false}
                    onChange={() => setApprove(false)}
                  />
                  <label className="form-check-label" htmlFor="radio-deny">
                    Deny
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message"> Message </label>
                <textarea
                  className="form-control"
                  maxLength="50"
                  id="form-message"
                  rows="2"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
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
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const SuccessMessage = (props) => {
  let { isSuccessful } = props;
  isSuccessful = isSuccessful === true ? true : false;
  const type = isSuccessful ? "success" : "danger";
  const isHidden = isSuccessful ? "" : "hidden";
  const message = isSuccessful ? "Updated successfully!" : "Failed to update!";
  const className = `alert alert-${type} reimbursement-alert ${isHidden}`;
  return (
    <div className={className} role="alert" id="creation-alert">
      {message}
    </div>
  );
};

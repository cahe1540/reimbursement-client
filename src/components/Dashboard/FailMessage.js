import React from "react";

export const FailMessage = (props) => {
  let { error } = props;
  error = error ? true : false;
  const type = error ? "danger" : "warn";
  const isHidden = error ? "" : "hidden";
  const message = error ? "Failed to Update!" : "";
  const className = `alert alert-${type} reimbursement-alert ${isHidden}`;
  return (
    <div className={className} role="alert" id="creation-alert">
      {message}
    </div>
  );
};

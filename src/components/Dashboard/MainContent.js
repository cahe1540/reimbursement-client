import React from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import ComingSoon from "./ComingSoon";
import EmployeeReimbursements from "./EmployeeReimbursements";
import ManagerReimbursements from "./ManagerReimbursements";

const MainContent = (props) => {
  const { user } = useSelector((state) => state.user);
  const { menuState } = props;
  let role;
  if (user && user.data) role = user.data.role;
  const ReimbursementType = (role) => {
    if (role === "employee") return <EmployeeReimbursements />;
    if (role === "manager") return <ManagerReimbursements />;
    return <ComingSoon />;
  };

  const determineOutput = (num) => {
    if (num === 0) return <Account />;
    else if (num === 1) return ReimbursementType(role);
    else if (num === 2) return <ComingSoon />;
    else if (num === 3) return <ComingSoon />;
    else if (num === 4) return <ComingSoon />;
    else return <ComingSoon />;
  };

  return <div className="content">{determineOutput(menuState)}</div>;
};

export default MainContent;

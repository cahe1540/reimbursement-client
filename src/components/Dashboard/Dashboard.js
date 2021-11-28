import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userIsValid } from "../../utils/functions";
import Nav from "../header-footer/Nav";
import CreateNewReimbursementModal from "../modals/CreateNewReimbursementModal";
import { ApproveReimbursementModal } from "../modals/ApproveReimbursementModal";
import EmployeeContent from "./EmployeeContent";
import ManagerContent from "./ManagerContent";

const Dashboard = (props) => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const [menuState, setMenuState] = useState(0);

  const updateMenu = (e) => {
    e.preventDefault();
    if (e.target.id === "account") setMenuState(0);
    else if (e.target.id.includes("reimbursement")) setMenuState(1);
    else if (e.target.id === "settings") setMenuState(2);
    else if (e.target.id === "analytics") setMenuState(3);
    else if (e.target.id === "cool-manager-stuff") setMenuState(4);
  };

  useEffect(() => {
    if (!user.user || !userIsValid(user.user.data)) history.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <div className="main-section">
        <div className="inner-container">
          {user.user && user.user.data.role === "employee" ? (
            <EmployeeContent menuState={menuState} updateMenu={updateMenu} />
          ) : (
            <ManagerContent menuState={menuState} updateMenu={updateMenu} />
          )}
        </div>
      </div>
      <ApproveReimbursementModal />
      <CreateNewReimbursementModal />
    </>
  );
};

export default Dashboard;

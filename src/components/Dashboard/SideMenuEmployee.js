import React from "react";

const SideMenuEmployee = (props) => {
  const { menuState, updateMenu } = props;

  return (
    <div className="list-group side-menu bg-color1-gradient">
      <a
        href="##"
        className={`list-group-item bg-color1-gradient no-border ${
          menuState === 0 ? "selected" : "text-white"
        } menu-font-size`}
        onClick={updateMenu}
        id="account"
      >
        Account
      </a>
      <a
        href="##"
        className={`list-group-item bg-color1-gradient no-border ${
          menuState === 1 ? "selected" : "text-white"
        } menu-font-size`}
        onClick={updateMenu}
        id="my-reimbursements"
      >
        My Reimbursements
      </a>
      <a
        href="##"
        className={`list-group-item bg-color1-gradient no-border ${
          menuState === 2 ? "selected" : "text-white"
        } menu-font-size`}
        onClick={updateMenu}
        id="settings"
      >
        Settings
      </a>
    </div>
  );
};

export default SideMenuEmployee;

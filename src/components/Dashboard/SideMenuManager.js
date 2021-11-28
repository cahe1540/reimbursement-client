import React from "react";

const SideMenuManager = (props) => {
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
        id="reimbursements"
      >
        Reimbursements
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
      <a
        href="##"
        className={`list-group-item bg-color1-gradient no-border ${
          menuState === 3 ? "selected" : "text-white"
        } menu-font-size`}
        onClick={updateMenu}
        id="analytics"
      >
        Analytics
      </a>
      <a
        href="##"
        className={`list-group-item bg-color1-gradient no-border ${
          menuState === 4 ? "selected" : "text-white"
        } menu-font-size`}
        onClick={updateMenu}
        id="cool-manager-stuff"
      >
        Cool Manager Stuff
      </a>
    </div>
  );
};

export default SideMenuManager;

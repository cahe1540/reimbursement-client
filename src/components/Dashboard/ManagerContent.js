import React from "react";
import SideMenuManager from "./SideMenuManager";
import MainContent from "./MainContent";

const ManagerContent = (props) => {
  const { menuState, updateMenu } = props;
  return (
    <>
      <SideMenuManager menuState={menuState} updateMenu={updateMenu} />
      <MainContent menuState={menuState}></MainContent>
    </>
  );
};

export default ManagerContent;

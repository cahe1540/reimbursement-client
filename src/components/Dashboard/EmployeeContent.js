import React from 'react';
import SideMenuEmployee from './SideMenuEmployee';
import MainContent from './MainContent';

const EmployeeContent = (props) => {
    const{ menuState, updateMenu } = props;
    return (
        <>
            <SideMenuEmployee menuState={menuState} updateMenu={updateMenu} />  
            <MainContent menuState = {menuState}/>
        </>
    )
}

export default EmployeeContent;

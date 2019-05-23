import React from 'react';
import NavMenu from './NavMenu';
import SideBar from './SideBar';


export default props => (

  <React.Fragment>
    <SideBar />
    <NavMenu />
    <div className="content-wrapper">
      {props.children}
    </div>
  </React.Fragment>
);
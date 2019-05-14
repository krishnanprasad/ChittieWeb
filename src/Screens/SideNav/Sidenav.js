import React, { Component } from 'react';
import '../SideNav/Sidenav.css';
import { NavLink } from 'react-router-dom';



const checkActive = (match, location) => {

  return true;
}

class SideNav extends Component {
  render() {
    return (

      <div className="sidenav d-flex" style={{ overflowY: 'hidden', backgroundColor: '#de5555' }}>
        <div className="mr-auto">
          <img src={require("../../../src/assets/download.png")} style={{ width: '100px', height: '70px' }} alt="userimage" />
          {/* <span style={{ fontSize: '25px' }}>Krishnan RA</span> */}
        </div> 
        {/* <img src={require("../../../src/assets/userimage.png")} style={{ width: '140px', height: '140px' }} alt="userimage" /> */}
        <div className="" style={{ display: '', marginTop: 'auto',marginBottom:'auto' }}>
        {/* <span style={{ fontSize: '20px', color: '#acacac' }}>@krishnanra</span> */}
        <NavLink to={'/Home/Dashboard'} className="sidebarspan" activeClassName="activelink">
            <span className="navtext">Dashboard</span>
          </NavLink>
          <NavLink to={'/Home/Group'} className="sidebarspan" activeClassName="activelink" >
            <span className="navtext">Groups</span>
          </NavLink>
          <NavLink to={'/Home/Transaction'} className="sidebarspan" activeClassName="activelink" >
            <span className="navtext">Transactions</span>
          </NavLink>
          <NavLink to={'/Home/Notification'} className="sidebarspan" activeClassName="activelink" >
            <span className="navtext">Notifications</span>
          </NavLink>
          <NavLink to={'/Home/Profile'} className="sidebarspan"  activeClassName="activelink" >
            <span className="navtext">Profile</span>
          </NavLink>
          {/* <NavLink to={'/Home/CreateChit'} className="sidebarspan" activeClassName="activelink" >
            <span className="navtext">Create a Chit</span>
          </NavLink> */}
           <NavLink to={'/'} exact className="sidebarspan" activeClassName="activelink" >
            <span className="navtext">Log Out</span>
          </NavLink>
        </div>
      

       
      </div>
    )
  }
}

export default SideNav;
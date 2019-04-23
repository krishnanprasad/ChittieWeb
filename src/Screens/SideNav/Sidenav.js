import React, { Component } from 'react';
import '../SideNav/Sidenav.css';
import { NavLink } from 'react-router-dom';



const checkActive=(match,location) =>{
  console.log('Check Active Working');
  console.log(match,location);
  return true;
}

class SideNav extends Component {
  render() {
    return (

      <div className="sidenav" style={{overflowY:'hidden',backgroundColor:'white',minHeight:'100%',textAlign:'center'}}>
        <div style={{ display: 'block', boxShadow: '0px 2px 5px #acacac', marginBottom: '10px' }}>
          <img src={require("../../../src/assets/download.png")} style={{ width: '120px', height: '70px' }} alt="userimage" />
        </div>
        <img src={require("../../../src/assets/userimage.png")} style={{ width: '140px', height: '140px' }} alt="userimage" />
        <div style={{ display: 'block', marginTop: '10px' }}>
          <span style={{ fontSize: '25px' }}>Krishnan RA</span>
        </div>
        <div style={{ display: 'block', marginTop: '-10px' }}>
          <span style={{ fontSize: '20px', color: '#acacac' }}>@krishnanra</span>
        </div>
        <div style={{ display: 'block', marginTop: '30px' }}>
          <NavLink to={'/Home/Dashboard'} activeStyle={{ color: '#acacac' }} activeClassName='active' isActive={checkActive}>
            <span style={{ fontSize: '18px' }}>Dashboard</span>
          </NavLink>
        </div>
        <div style={{ display: 'block', marginTop: '10px' }}>
          <NavLink to={'/Home/Group'} activeStyle={{ color: '#acacac' }} >
            <span style={{ fontSize: '18px' }}>Groups</span>
          </NavLink>
        </div>

        {/* <div style={{ display: 'block', marginTop: '20px' }}>
          <span style={{ fontSize: '24px' }}>Peers</span>
        </div> */}

        <div style={{ display: 'block', marginTop: '10px' }}>
          <NavLink to={'/Home/Transaction'} activeStyle={{ color: '#acacac' }} >
            <span style={{ fontSize: '18px' }}>Transactions</span>
          </NavLink>
        </div>

        <div style={{ display: 'block', marginTop: '10px' }}>
        <NavLink to={'/Home/Notification'} activeStyle={{ color: '#acacac' }} >
          <span style={{ fontSize: '18px' }}>Notifications</span>
          </NavLink>
        </div>

        <div style={{ display: 'block', marginTop: '10px' }}>
        <NavLink to={'/Home/Profile'} activeStyle={{ color: '#acacac' }} >
          <span style={{ fontSize: '18px' }}>Profile</span>
          </NavLink>
        </div>

      </div>
    )
  }
}

export default SideNav;
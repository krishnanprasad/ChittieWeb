import React, { Component } from 'react';
import '../SideNav/Sidenav.css';

class SideNav extends Component {
    render() {
      return (

<div className="sidenav">
                <div style={{ display: 'block', boxShadow: '0px 2px 5px #acacac', marginBottom: '20px' }}>
                  <img src={require("../../../src/assets/download.png")} style={{ width: '120px', height: '80px' }} alt="userimage" />
                </div>
                <img src={require("../../../src/assets/userimage.png")} style={{ width: '180px', height: '180px' }} alt="userimage" />
                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '30px' }}>Krishnan RA</span>
                </div>
                <div style={{ display: 'block', marginTop: '-10px' }}>
                  <span style={{ fontSize: '20px', color: '#acacac' }}>@krishnanra</span>
                </div>

                <div style={{ display: 'block', marginTop: '50px' }}>
                  <span style={{ fontSize: '24px' }}>Groups</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Peers</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Transactions</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Notifications</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Profile</span>
                </div>

              </div>
      )
    }
}

export default SideNav;
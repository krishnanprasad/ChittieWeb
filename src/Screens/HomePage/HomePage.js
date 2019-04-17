import React, { Component } from 'react';
import SideNav from '../SideNav/Sidenav';
import './HomePage.css';
import Dashboard from '../Dashboard/Dashboard';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
       
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <SideNav />
              <div className="col-md-10 main" style={{ marginLeft: 'auto' }}>
              
                {/* End of Main */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

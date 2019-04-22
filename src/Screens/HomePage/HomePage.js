import React, { Component } from 'react';
import SideNav from '../SideNav/Sidenav';
import './HomePage.css';
import Dashboard from '../Dashboard/Dashboard';
import common from '../../Services/Common.js';


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = { showing: common.toggle };
  }

  toggleSlidebar = () => {
    common.toggle=!common.toggle;   
    this.setState({ showing: common.toggle });
  }

  render() {

    return (

      <div className="App">

        <div className="container">
          <div className="col-md-12">
            {/* <div className="row" style={{ marginLeft: '150px' }}> */}
            <div className="row">
              {/* <button onClick={this.toggleSlidebar}>toggle</button> */}
              {this.state.showing ?
                <SideNav />
                : null
              }
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

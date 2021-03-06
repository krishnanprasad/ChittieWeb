import React, { Component } from 'react';
import SideNav from '../SideNav/Sidenav';
import './HomePage.css';
import common from '../../Services/Common.js';
import Dashboard from '../Dashboard/Dashboard';
import GroupPage from '../Group/GroupPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotificationPage from '../Notification/NotificationPage';
import ProfilePage from '../Profile/ProfilePage';
import TransactionPage from '../Transaction/TransactionPage';
import ChitDescription from '../ChitDescription/ChitDescription';
import PaymentPage from '../PaymentPage/PaymentPage';
import LoginPage from '../../Screens/LoginPage';
import CreateChitPage from '../CreateChitPage/CreateChitPage';
import GroupList from '../Group/GroupList/GroupList';
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = { showing: common.toggle };
  }

  toggleSlidebar = () => {
    common.toggle = !common.toggle;
    this.setState({ showing: common.toggle });
  }

  componentDidMount() {
    let currentHideNav = (window.innerWidth <= 600);
    console.log('Screen Size' + currentHideNav);
    if (currentHideNav == true) {
      common.toggle = true;
    }

  }


  render() {

    return (
      <div className="HomePage" style={{ backgroundColor: '#f9f9f9' }}>

        {/* <button onClick={this.toggleSlidebar} className='ToggleButton' style={{ float: 'right' }}>Show Menu</button> */}

        <div className="col-lg-12 col-sm-12">
          {this.state.showing ? <SideNav /> : null}
        </div>
        <div className="container">
          <div className="col-lg-12 col-sm-12" style={{ marginTop: '8%' }}>
            <Route path="/Home/Dashboard" exact component={Dashboard} />
            <Route path="/Home/Group" component={GroupPage} />

            <Route path="/Home/Notification" exact component={NotificationPage} />
            <Route path="/Home/Profile" exact component={ProfilePage} />
            <Route path="/Home/Transaction" exact component={TransactionPage} />




            <Route path="/Home/CreateChit" component={CreateChitPage} />
            <Route path="/" exact strict component={LoginPage} />
          </div>

        </div>

      </div>
    );
  }
}

export default HomePage;

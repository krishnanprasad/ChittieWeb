import React, { Component } from 'react';
import './App.css';
import LoginPage from './Screens/LoginPage';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import HomePage from './Screens/HomePage/HomePage';
import GroupPage from './Screens/Group/GroupPage';
import Dashboard from './Screens/Dashboard/Dashboard';
import TransactionPage from './Screens/Transaction/TransactionPage';
import ProfilePage from './Screens/Profile/ProfilePage';
import NotificationPage from './Screens/Notification/NotificationPage';
import ChitDescription from './Screens/ChitDescription/ChitDescription';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Route path="/" component={LoginPage} exact />
     <Route path="/Home" component={HomePage}/>
     <Route path="/Home/Dashboard" component={Dashboard} />
     <Route path="/Home/Group" component={GroupPage} />
     <Route path="/Home/Transaction" component={TransactionPage} />
     <Route path="/Home/Notification" component={NotificationPage} />
     <Route path="/Home/Profile" component={ProfilePage} />
     <Route path="/Home/ChitDescription/:descriptionid" component={ChitDescription} />
     </BrowserRouter>
    );
  }
  
}

export default App;

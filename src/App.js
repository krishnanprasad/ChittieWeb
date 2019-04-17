import React, { Component } from 'react';
import './App.css';
import LoginPage from './Screens/LoginPage';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import HomePage from './Screens/HomePage/HomePage';
import GroupPage from './Screens/Group/GroupPage';
import Dashboard from './Screens/Dashboard/Dashboard';
import TransactionPage from './Screens/Transaction/TransactionPage';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Route path="/" component={LoginPage} exact />
     <Route path="/Home" component={HomePage}/>
     <Route path="/Home/Dashboard" component={Dashboard} />
     <Route path="/Home/Group" component={GroupPage} />
     <Route path="/Home/Transaction" component={TransactionPage} />
     </BrowserRouter>
    );
  }
  
}

export default App;

import React, { Component } from 'react';
import './App.css';
import LoginPage from './Screens/LoginPage';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Screens/Tabs/Dashboard';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Route path="/" component={LoginPage} exact />
     <Route path="/Dashboard" component={Dashboard} />
     </BrowserRouter>
    );
    
  }
  
}

export default App;

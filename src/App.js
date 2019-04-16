import React, { Component } from 'react';
import './App.css';
import LoginPage from './Screens/LoginPage';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './Screens/HomePage';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Route path="/" component={LoginPage} exact />
     <Route path="/Home" component={HomePage} exact />
     </BrowserRouter>
    );
  }
  
}

export default App;

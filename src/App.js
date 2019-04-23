import React, { Component } from 'react';
import './App.css';
import LoginPage from './Screens/LoginPage';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import HomePage from './Screens/HomePage/HomePage';
import common from './Services/Common';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginPage}/>
       
          <Route path="/Home" component={HomePage}/>
          
      </BrowserRouter>
    );
  }

}

export default App;

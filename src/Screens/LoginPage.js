import React, { Component } from 'react';
import { BrowserRouter, Route,Link } from 'react-router-dom';
class LoginPage extends Component {
  handleLogin() {
   
    this.props.history.push('/Dashboard');
  }
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <div class="form-group">
          <label class="sr-only">Username</label>
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="form-group">
          <label for="password" class="sr-only">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" />
        </div>
        <Link to="/Dashboard">
        <button onClick={this.handleLogin} type="submit" class="btn btn-primary">Login</button>
        </Link>
      </div>
    );
  }
}

export default LoginPage;

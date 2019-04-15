import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
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
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    );
  }
}

export default HomePage;

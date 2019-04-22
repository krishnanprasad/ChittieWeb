import React, { Component } from 'react';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = () => {

    console.log("Username " + this.state.username);
    if (this.state.username === "user") {
      alert('Success');
      this.props.history.push('/Home/Dashboard');
    }
    else {
      debugger;
      alert("wrong Username or Password");
    }
  }
  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });

    console.log("username" + this.state.username);
  }


  render() {
    return (
      <div className="App">
        <div class="row justify-content-center" style={{marginTop:'50px'}}>
          <div className="col-md-8">
            <p><h2>Welcome to Chittie</h2></p>
            <p><span style={{ fontSize: '18px', color: '#acacac' }}>Invest and Get Loan from your Friends and Family</span></p>
            <div className="form-group">
              <label className="sr-only">Username</label>
              <input type="text" className="form-control" value={this.state.username} name="username" placeholder="Enter Username" onChange={this.handleChange} />
            </div>
            <div className="form-group">

              <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter Password" onChange={this.handleChange} />
            </div>

            <button onClick={this.handleLogin} type="submit" className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

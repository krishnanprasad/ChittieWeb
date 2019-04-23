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
      <div className="LoginPage" style={{ textAlign: 'center' }}>
        <div style={{marginTop: '10%'}}>
          <p><h2 style={{color:'#4CAF50'}}>Welcome to Chittie</h2></p>
          <p><span style={{ fontSize: '18px', color: '#5f5f5f' }}>Invest and Get Loan from your Friends and Family</span></p>
        </div>
        <div class="row justify-content-center" style={{ marginTop: '0px' }}>

          <div className="col-md-6" style={{ backgroundColor: '#4CAF50', padding: '40px 20px',boxShadow:'rgb(142, 142, 142) 2px 2px 6px 1px' }}>

            <div className="form-group">
              <label className="sr-only">Username</label>
              <input type="text" className="form-control" value={this.state.username} name="username" placeholder="Enter Username" onChange={this.handleChange} />
            </div>
            <div className="form-group">

              <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter Password" onChange={this.handleChange} />
            </div>

            <button onClick={this.handleLogin} type="submit" className="btn" style={{backgroundColor:'white',color:'#4CAF50'}}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

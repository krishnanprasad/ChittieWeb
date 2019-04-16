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
     this.props.history.push('/Home');
    }
    else {
      debugger;
      alert("wrong Username or Password");
    }
  }
  handleChange = (e) =>{ 
   
    this.setState({[e.target.name]: e.target.value});
   
    console.log("username" + this.state.username);
  }


  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <div className="form-group">
          <label className="sr-only">Username</label>
          <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.handleChange} />
        </div>
        <div className="form-group">
        
          <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Password" onChange={this.handleChange}/>
        </div>
      
          <button onClick={this.handleLogin} type="submit" className="btn btn-primary">Login</button>
      
      </div>
    );
  }
}

export default LoginPage;

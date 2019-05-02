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
      <div className="LoginPage">
        <div>
          <div style={{ backgroundColor: '#ff9900', padding: '10px 5px' }}>
            <h2 style={{ color: 'white' }}>Chittie</h2>
          </div>


          <div className="row" style={{ marginTop: '0px', backgroundColor: '#ff9900', backgroundImage: 'linear-gradient(180deg, #ff9900, #fdca2e)', height: '500px' }}>
            <div className="col-md-7" style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '50px' }}>
              <h1 style={{ color: 'white' }}>Save and Lend Money Simultaneously</h1>
              <p>
                <h5 style={{ color: 'white' }}>Do Transaction with your friends, Family and Collegues  Easily & Quickly</h5>
              </p>
              <p>
                <h5 style={{ color: 'white' }}>Create Chit with your Collegues, Family and Friends</h5>
              </p>
            </div>
            <div className="col-md-5" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <div style={{ backgroundColor: '#FDCA2E', padding: '40px 20px', height: '280px', width: '95%' }}>
                <div className="form-group">
                  <label className="sr-only">Username</label>
                  <input type="text" className="form-control" value={this.state.username} name="username" placeholder="Enter Username" onChange={this.handleChange} />
                </div>
                <div className="form-group">

                  <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter Password" onChange={this.handleChange} />
                </div>

                <button onClick={this.handleLogin} type="submit" className="btn" style={{ backgroundColor: 'white', color: '#ff9900' }}>Login</button>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ textAlign: 'center', marginTop: '40px' }}>How it Works!</h2>
            <div className="d-flex" style={{ height: '300px' }}>
              <div className="p-2 flex-fill" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med1.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontSize: '20px' }}>Create Chit</span>
                  </div>
                </div>
              </div>
              <div className="p-2 flex-fill" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med2.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontSize: '20px' }}>Add Members</span>
                  </div>
                </div>  
              </div>
              <div className="p-2 flex-fill" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med3.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontSize: '20px' }}>Start Chit</span>
                  </div>
                </div>
              </div>
              <div className="p-2 flex-fill" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med4.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontSize: '20px' }}>Save & Lend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '0px', backgroundColor: '#ff9900', backgroundImage: 'linear-gradient(180deg, #ff9900, #fdca2e)', height: '120px' }}>
            <div className="col-md-12" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <div className="row">
                <div className="col-md-3" style={{textAlign:'center'}}>
                  <span style={{color:'white'}}>Invite your Friends</span>
                </div>
                <div className="col-md-6" >
                  <input type="text" className="form-control" placeholder="Invite your Friends" />

                </div>
                <div className="col-md-3">
                  <button className="btn btn-default" type="button">Invite</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default LoginPage;

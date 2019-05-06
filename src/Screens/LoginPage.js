import React, { Component } from 'react';

class LoginPage extends Component {

  constructor(props) {
    sessionStorage.setItem('userid', null);
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }


  handleLogin = () => {
    sessionStorage.setItem('userid', '001');
    this.props.history.push('/Home/Dashboard');
  }


  // handleLogin = () => {
  //   debugger;
  //   console.log("Username " + this.state.username);
  //   var url = `http://localhost:65204/api/usercredentials?password=${this.state.password}&phonenumber=${this.state.username}`;
  //   debugger;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then((data) => {
  //       debugger;

  //       if (data != null) {
  //         sessionStorage.setItem('userid', data.userid);
  //         this.props.history.push('/Home/Dashboard');
  //       }
  //       else{
  //         alert("wrong Username or Password");

  //       }

  //     });
  // }
  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });

  }


  render() {
    return (
      <div className="LoginPage">
        <div>
          <div style={{ backgroundColor: '#ff9900', padding: '10px 10px' }}>
            <h2 style={{ color: 'white' }}>Chittie <span style={{ fontSize: '15px' }}>[ create your own bank ]</span></h2>
          </div>


          <div className="row" style={{ marginTop: '0px', backgroundColor: '#ff9900', backgroundImage: 'linear-gradient(180deg, #ff9900, #fdca2e)', height: '500px' }}>
            <div className="col-md-7" style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '50px' }}>
              <h1 style={{ color: 'white' }}>Save and Lend Money Simultaneously</h1>
              <p>
                <h5 style={{ color: 'white' }}>Do Banking with your Friends, Family and Collegues  Easily & Quickly</h5>
              </p>
            </div>
            <div className="col-md-5" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <div style={{ backgroundColor: '#FDCA2E', padding: '40px 20px', height: '280px', width: '95%' }}>
                <div className="form-group">
                  <label className="sr-only">Username</label>
                  <input type="text" className="form-control" value={this.state.username} name="username" placeholder="Enter Phone Number" onChange={this.handleChange} />
                </div>
                <div className="form-group">

                  <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter Password" onChange={this.handleChange} />
                </div>

                <button onClick={this.handleLogin} type="submit" className="btn" style={{ backgroundColor: 'white', color: '#ff9900' }}>Login</button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="SecondBlack" style={{ textAlign: 'center', marginTop: '40px' }}>How it Works!</h3>
            <div className="row" style={{ height: '300px' }}>
              <div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med1.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span className="SecondBlack" style={{ fontWeight: 600, fontSize: '18px', display: 'block' }}>Create Chit</span>
                    <span className="ThirdBlack" style={{ fontSize: '14px', display: 'block' }}>Create a Chit based on Value,Tenure & Interest Rates</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med2.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span className="SecondBlack" style={{ fontWeight: 600, fontSize: '18px', display: 'block' }}>Add Members</span>
                    <span className="ThirdBlack" style={{ fontSize: '14px', display: 'block' }}>Invite members from your connections for the Chit</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med3.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span className="SecondBlack" style={{ fontWeight: 600, fontSize: '18px', display: 'block' }}>Start Chit</span>
                    <span className="ThirdBlack" style={{ fontSize: '14px', display: 'block' }}>Once all members accepted chit it get started ,Chittie will start reminding your connections periodically</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={require("../../src/assets/LoginPage/med4.png")} style={{ width: '80px', height: '80px' }} alt="userimage" />
                  <div style={{ display: 'block', marginTop: '10px' }}>
                    <span className="SecondBlack" style={{ fontWeight: 600, fontSize: '18px', display: 'block' }}>Save & Lend</span>
                    <span className="ThirdBlack" style={{ fontSize: '14px', display: 'block' }}>Start saving by paying CHIT regularly and Lend money when ever you want, At the end group members get divident on all Interest paid from lenders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '0px', backgroundColor: '#ff9900', backgroundImage: 'linear-gradient(180deg, #ff9900, #fdca2e)', height: '120px' }}>
            <div className="col-md-12" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <div className="row">
                <div className="col-md-3" style={{ textAlign: 'center' }}>
                  <span style={{ color: 'white' }}>Invite your Friends</span>
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

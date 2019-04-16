import React, { Component } from 'react';
import '../Screens/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <p>Home Page</p>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="sidenav">
                <div style={{display:'block',boxShadow: '0px 2px 5px #acacac',marginBottom:'20px'}}>
                <img src={require("../../src/assets/download.png")} style={{ width: '120px', height: '80px' }} alt="userimage" />
                </div>
                <img src={require("../../src/assets/userimage.png")} style={{ width: '180px', height: '180px' }} alt="userimage" />
                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '30px' }}>Krishnan RA</span>
                </div>
                <div style={{ display: 'block', marginTop: '-10px' }}>
                  <span style={{ fontSize: '20px',color:'#acacac' }}>@krishnanra</span>
                </div>

                <div style={{ display: 'block', marginTop: '50px' }}>
                  <span style={{ fontSize: '24px' }}>Groups</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Peers</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Transactions</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Notifications</span>
                </div>

                <div style={{ display: 'block', marginTop: '20px' }}>
                  <span style={{ fontSize: '24px' }}>Profile</span>
                </div>

              </div>
              <div className="col-md-10 main" style={{ marginLeft: 'auto' }}>

                <div className="row" style={{ margin: '10px 0px 20px 0px' }}>
                  <div className="col-md-3">
                    <div style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'left', color: '#acacac' }}>Total Groups</h6>
                    </div>
                    <div style={{ display: 'block' }}>
                      <h3 style={{ textAlign: 'left' }}>8</h3>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'left', color: '#acacac' }}>Bid</h6>
                    </div>
                    <div style={{ display: 'block' }}>
                      <h3 style={{ textAlign: 'left' }}>8</h3>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'left', color: '#acacac' }}>Loan Taken</h6>
                    </div>
                    <div style={{ display: 'block' }}>
                      <h3 style={{ textAlign: 'left' }}>8</h3>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'left', color: '#acacac' }}>Earned</h6>
                    </div>
                    <div style={{ display: 'block' }}>
                      <h3 style={{ textAlign: 'left' }}>3200</h3>
                    </div>
                  </div>

                </div>

                <div className="row">
                <div className="col-md-4" >
                    <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                    <div className="card-body">
                      <h4 className="card-title">MCT 2014</h4>
                      <h6>1,50,000</h6>
                      <h2>1,922<span style={{color:'#ff2f4b',fontSize:'18px'}}>(422)</span></h2>
                      <table style={{ width: '100%' }}>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Term</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>6/10</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Pay Date</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>14.12.2019</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Bid Date</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>15.12.2019</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Claimers</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>2/10</td>
                        </tr>
                      </table>
                      <div style={{ display: 'flex', justifyContent: 'space-between',marginTop: '20px' }}>
                        <button type="button" className="btn" style={{backgroundColor:'#dedede',color:'white'}}>Take Loan </button>
                        <button type="button" className="btn btn-success">Pay EMI</button>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-4" >
                    <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                    <div className="card-body">
                      <h4 className="card-title">MCT 2014</h4>
                      <h6>1,50,000</h6>
                      <h2>1,380<span style={{color:'#0bc736',fontSize:'18px'}}>(120)</span></h2>
                      <table style={{ width: '100%' }}>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Term</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>6/10</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Pay Date</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>14.12.2019</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Bid Date</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>15.12.2019</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Claimers</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>2/10</td>
                        </tr>
                      </table>
                      <div style={{ display: 'flex', justifyContent: 'space-between',marginTop: '20px' }}>
                        <button type="button" className="btn" style={{backgroundColor:'white',color:'#8a8a8a',border:'1px solid #8a8a8a'}}>Take Loan </button>
                        <button type="button" className="btn btn-success">Pay EMI</button>
                      </div>
                    </div>
                  </div>
                  </div>


                   <div className="col-md-4" >
                    <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                    <div className="card-body">
                      <h4 className="card-title">MCT 2014</h4>
                      <h6>1,50,000</h6>
                      <h2>1,500</h2>
                      <table style={{ width: '100%' }}>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Term</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>6/10</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Pay Date</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>14.12.2019</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Bid Date</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>15.12.2019</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', padding: '10px 0px' }}>Claimers</td>
                          <td style={{ textAlign: 'right', padding: '10px 0px' }}>2/10</td>
                        </tr>
                      </table>
                      <div style={{ display: 'flex', justifyContent: 'space-between',marginTop: '20px' }}>
                      <button type="button" className="btn" style={{backgroundColor:'white',color:'#8a8a8a',border:'1px solid #8a8a8a'}}>Take Loan </button>
                        <button type="button" className="btn btn-success">Pay EMI</button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';

class GroupPage extends Component {
  render() {
    return (
      <div style={{marginLeft:'22%',width:'78%'}}>
      <h3 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>Your Groups</h3>
      <div className="col-md-12 main">
        <div className="row">
          <div className="col-md-4" >
            <div className="card" style={{ width: '95%', fontSize: '16px' }}>
              <div className="card-body">
                <h4 className="card-title">MCT 2014</h4>
                <h6>1,50,000</h6>
                <h2>1,922<span style={{ color: '#ff2f4b', fontSize: '18px' }}>(422)</span></h2>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button type="button" className="btn" style={{ backgroundColor: '#dedede', color: 'white' }}>Take Loan </button>
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
                <h2>1,380<span style={{ color: '#0bc736', fontSize: '18px' }}>(120)</span></h2>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button type="button" className="btn" style={{ backgroundColor: 'white', color: '#8a8a8a', border: '1px solid #8a8a8a' }}>Take Loan </button>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button type="button" className="btn" style={{ backgroundColor: 'white', color: '#8a8a8a', border: '1px solid #8a8a8a' }}>Take Loan </button>
                  <button type="button" className="btn btn-success">Pay EMI</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

export default GroupPage;
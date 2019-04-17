import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div style={{marginLeft:'22%',width:'78%'}}>
            <div className="col-md-12 main">
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


                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Last Transaction</h3>
                <table className="HeaderTable" style={{ width: '100%' }}>
                    <tr className='HeaderRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>

                </table>



                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Loan Status</h3>
                <table className="HeaderTable" style={{ width: '100%' }}>
                    <tr className='HeaderRow'>
                        <td>User</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Total Bidders</td>
                        <td>Amount</td>
                        <td>BID Last date</td>
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Krishnan RA</td>
                        <td>MCT 2014</td>
                        <td>20,00</td>
                        <td>02/10</td>
                        <td>#2</td>
                        <td>19,500</td>
                        <td>10.12.2019</td>
                        <td>open</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Saravana Kumar</td>
                        <td>SKCET MCT</td>
                        <td>25,000</td>
                        <td>09/10</td>
                        <td>#1</td>
                        <td>24,500</td>
                        <td>11.12.2019</td>
                        <td>open</td>
                    </tr>
                </table>
            </div>
            </div>
        );
    }
}

export default Dashboard;
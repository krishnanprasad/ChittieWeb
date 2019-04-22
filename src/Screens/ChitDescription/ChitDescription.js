import React, { Component } from 'react';
import './ChitDescription.css'

class ChitDescription extends Component {
    render() {
        return (
            <div style={{ marginLeft: '22%', width: '78%' }}>

                <div class="d-flex mb-3">
                    <div class="p-2"><h2>Chit Name</h2> <span className="Raised">Raised</span>
                    </div>

                </div>

                <div className="row" style={{ margin: '10px 0px 20px 0px' }}>
                    <div className="col-md-4">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Chit Value</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h3 style={{ textAlign: 'left' }}>1,50,000</h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Chit Percentage</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h3 style={{ textAlign: 'left' }}>8%</h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Earned</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h3 style={{ textAlign: 'left' }}>+ 3616</h3>
                        </div>
                    </div>


                </div>



                <div className="row" style={{ margin: '10px 0px 20px 0px' }}>
                    <div className="col-md-4">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Members</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h3 style={{ textAlign: 'left' }}>10</h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Chit EMI</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h3 style={{ textAlign: 'left' }}>1620</h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Current Chit Period</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h3 style={{ textAlign: 'left' }}>8</h3>
                        </div>
                    </div>


                </div>
                <div className="row" style={{ margin: '10px 0px 20px 0px' }}>
                    <div className="col-md-3">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Start Date</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>10-10-2019</h6>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Closing Date</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>10-08-2020</h6>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Payment Deadline</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>First 7 Days</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Bid Date</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>First 7 Days</h6>
                        </div>
                    </div>

                </div>

                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Bid Status</h3>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Applied Date</td>
                            <td>Bid Date</td>
                            <td>Bidder Name</td>
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
                            <td>14.14.2019</td>

                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td>14.14.2019</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td>14.14.2019</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td>14.14.2019</td>
                        </tr>

                    </table>
                </div>

                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Members</h3>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            
                            <td>Memeber Name</td>
                            <td>Delay Payments</td>
                            <td>Bid Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            
                            <td>Transaction Date</td>
                            <td>Delay Payments</td>
                            <td>Group Name</td>

                        </tr>
                        <tr className='BodyRow'>
                          
                            <td>Memeber Name</td>
                            <td>Delay Payments</td>
                            <td>Bid Status</td>
                        </tr>
                        <tr className='BodyRow'>
                           
                            <td>Memeber Name</td>
                            <td>Delay Payments</td>
                            <td>Bid Status</td>
                        </tr>
                        <tr className='BodyRow'>
                           
                            <td>Memeber Name</td>
                            <td>Delay Payments</td>
                            <td>Bid Status</td>
                        </tr>

                    </table>
                </div>

                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Last Transaction</h3>
                    <div className="ShadowTable">
                        <table className="HeaderTable" style={{ width: '100%' }}>
                            <tr className='HeaderRow'>
                                <td>Transaction ID</td>
                                <td>Transaction Date</td>
                                <td>@username</td>
                                
                                <td>Term</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                            <tr className='BodyRow'>
                                <td>Transaction ID</td>
                                <td>Transaction Date</td>
                                <td>@username</td>
                              
                                <td>Term</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                            <tr className='BodyRow'>
                                <td>Transaction ID</td>
                                <td>Transaction Date</td>
                                <td>@username</td>
                               
                                <td>Term</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                            <tr className='BodyRow'>
                                <td>Transaction ID</td>
                                <td>Transaction Date</td>
                                <td>@username</td>                               
                                <td>Term</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                            <tr className='BodyRow'>
                                <td>Transaction ID</td>
                                <td>Transaction Date</td>
                                <td>@username</td>
                               
                                <td>Term</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>

                        </table>
                    </div>

            </div>
        )
    }
}
export default ChitDescription;
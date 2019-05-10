import React, { Component } from 'react';
import './ChitDescription.css'
import MemberListTable from './MemberListTable/Memberlist';

import { Link } from 'react-router-dom';
import ChitDetail from './ChitDetail/ChitDetail';

class ChitDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { isTenureActive: 1 };

    }
    ChangeTenure = (tabval) => {

        this.setState({ isTenureActive: tabval });
        console.log('Tenure' + this.state.isTenureActive);
    }
    render() {
        return (
            <div className="ChitDescription">
                <Link to="/Home/Group">
                    <button type="button" className="btn">back</button>
                </Link>

                <div class="d-flex" style={{ marginTop: '20px' }}>
                    <div class="p-2 mr-auto" ><h3 style={{ display: 'inline-block' }}>MCT 2014 Batch -2</h3><span style={{ marginLeft: '10px' }} className="Raised">Loan Raised</span></div>
                </div>

                <div className="row">

                    <div className="col-md-10">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#ff9900' }}>
                                        <div style={{ marginTop: '30px', marginBottom: '10px', padding: '5px 20px' }}>
                                            <img src={require("../../../src/assets/icons/piggy-bank-white.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: '#FFFFFF', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#ff9900', fontWeight: 'bold' }}>CHIT AMOUNT</h6>
                                        <h3 style={{ textAlign: 'left' }}>1,50,000</h3>
                                        <span style={{ textAlign: 'left' }}> tenure * emi</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#ff9900' }}>
                                        <div style={{ marginTop: '30px', marginBottom: '10px', padding: '5px 20px' }}>
                                            <img src={require("../../../src/assets/icons/emi.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: '#FFFFFF', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#ff9900', fontWeight: 'bold' }}>EMI</h6>
                                        <h3 style={{ textAlign: 'left' }}>15,000</h3>
                                        <span style={{ textAlign: 'left' }}>+ 640 Interest</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#ff9900' }}>
                                        <div style={{ marginTop: '30px', marginBottom: '10px', padding: '5px 20px' }}>
                                            <img src={require("../../../src/assets/icons/emi.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: '#FFFFFF', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#ff9900', fontWeight: 'bold' }}>Tenure</h6>
                                        <h3 style={{ textAlign: 'left' }}>10</h3>
                                        <span style={{ textAlign: 'left' }}>7 Completed</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row" style={{ marginTop: '30px', marginBottom: '20px' }}>

                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#007bff' }}>
                                        <div style={{ marginTop: '20px', marginBottom: '10px', padding: '5px 10px' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: 'white', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#007bff', fontWeight: 'bold' }}>Loan Available</h6>
                                        <h3 style={{ textAlign: 'left', color: '#007bff' }}>10,000</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#28a745' }}>
                                        <div style={{ marginTop: '20px', marginBottom: '10px', padding: '5px 10px' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: 'white', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#28a745', fontWeight: 'bold' }}>Earned</h6>
                                        <h3 style={{ textAlign: 'left', color: '#28a745' }}>3,182</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#da5454' }}>
                                        <div style={{ marginTop: '20px', marginBottom: '10px', padding: '5px 10px' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: 'white', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#da5454', fontWeight: 'bold' }}>Interest Paid</h6>
                                        <h3 style={{ textAlign: 'left', color: '#da5454' }}>632</h3>
                                    </div>
                                </div>
                            </div>


                          
                        </div>

                        <div className="row" style={{ marginTop: '30px', marginBottom: '20px' }}>

                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#999a9a' }}>
                                        <div style={{ marginTop: '20px', marginBottom: '10px', padding: '5px 10px' }}>
                                            <img src={require("../../../src/assets/icons/multiple-users.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: 'white', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#999a9a', fontWeight: 'bold' }}>Members</h6>
                                        <h3 style={{ textAlign: 'left', color: '#999a9a' }}>10</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#999a9a' }}>
                                        <div style={{ marginTop: '20px', marginBottom: '10px', padding: '5px 10px' }}>
                                            <img src={require("../../../src/assets/icons/percent.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: 'white', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#999a9a', fontWeight: 'bold' }}>Percentage</h6>
                                        <h3 style={{ textAlign: 'left', color: '#999a9a' }}>16.5%</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)' }}>
                                    <div style={{ backgroundColor: '#999a9a' }}>
                                        <div style={{ marginTop: '20px', marginBottom: '10px', padding: '5px 10px' }}>
                                            <img src={require("../../../src/assets/icons/percent.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ backgroundColor: 'white', padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#999a9a', fontWeight: 'bold' }}>Late Fee</h6>
                                        <h3 style={{ textAlign: 'left', color: '#999a9a' }}>1%</h3>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Chit Tenure */}

                        <div className="p-3  flex-wrap" style={{ marginBottom: '10px' }}>
                            <div className="row" style={{ marginBottom: '10px' }}>
                                <span className="SecondBlack" style={{ fontSize: '20px' }}>Tenures</span>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="" onClick={() => this.ChangeTenure(1)}>
                                    <div style={{ marginRight: '20px', display: 'table' }} className={`tenurelist ${this.state.isTenureActive == 1 ? 'tenureactive' : 'tenurenotactive'}`}>
                                        <span style={{ cursor: 'pointer', display: 'table-cell', verticalAlign: 'middle', fontSize: '22px' }}>#1</span>
                                    </div>
                                </div>
                                <div className="" onClick={() => this.ChangeTenure(2)}>
                                    <div style={{ marginRight: '20px', display: 'table' }} className={`tenurelist ${this.state.isTenureActive == 2 ? 'tenureactive' : 'tenurenotactive'}`}>
                                        <span style={{ cursor: 'pointer', display: 'table-cell', verticalAlign: 'middle', fontSize: '22px' }}>#2</span>
                                    </div>
                                </div>
                                <div className="" onClick={() => this.ChangeTenure(3)}>
                                    <div style={{ marginRight: '20px', display: 'table' }} className={`tenurelist ${this.state.isTenureActive == 3 ? 'tenureactive' : 'tenurenotactive'}`}>
                                        <span style={{ cursor: 'pointer', display: 'table-cell', verticalAlign: 'middle', fontSize: '22px' }}>#3</span>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div>
                            {
                                this.state.isTenureActive === 1 ? <ChitDetail /> : null
                            }
                        </div>
                        <div>
                            {
                                this.state.isTenureActive === 2 ? <ChitDetail /> : null
                            }
                        </div>
                        <div>
                            {
                                this.state.isTenureActive === 3 ? <ChitDetail /> : null
                            }
                        </div>


                    </div>
                    <div className="col-md-2" style={{ position: 'fixed', overflowY: 'scroll', right: '10px', height: '500px' }}>
                        <div className="Shadow card" style={{ marginBottom: '10px', backgroundColor: '#ff9900' }}>
                            <div style={{ display: 'block' }}>
                                <h6 style={{ textAlign: 'center', color: 'white' }}>Current Chit Period</h6>
                            </div>
                            <div style={{ display: 'block', textAlign: 'center' }}>
                                <h1 style={{ textAlign: 'center', color: 'white' }}>8</h1>
                                <span style={{ color: 'white' }}>out of 10</span>
                            </div>
                        </div>

                        <Link to="/Home/Group/ChitDescription/MCT2014/Payment" style={{ textDecoration: 'none', color: 'black' }}>
                            <button type="button" className="btn btn-block btn-emi btn-bigger" style={{ marginBottom: '10px', marginTop: '10px' }}>Pay EMI 15,640</button>
                        </Link>


                        <Link to="/Home/Group/ChitDescription/MCT2014/ApplyLoan">
                            <button type="button" className="btn btn-block btn-loan btn-bigger" style={{ marginBottom: '20px' }}>Apply Loan</button>
                        </Link>



                        <MemberListTable />
                    </div>
                </div>

            </div>
        )
    }
}
export default ChitDescription;
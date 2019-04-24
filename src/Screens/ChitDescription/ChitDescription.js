import React, { Component } from 'react';
import './ChitDescription.css'
import MemberListTable from './MemberListTable/Memberlist';
import LastTransactionList from './LastTransactionList/LastTransactionList';
import InfoList from './InfoList/InfoList';
import {Link} from 'react-router-dom';

class ChitDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { isTabActive: 1 };

    }
    ChangeTab = (tabval) => {
        this.setState({ isTabActive: tabval });
    }
    render() {
        return (
            <div className="ChitDescription">
                <div class="d-flex" style={{marginTop:'20px'}}>
                    <div class="p-2 mr-auto" ><h2 style={{display:'inline-block'}}>Chit Name</h2><span style={{marginLeft:'10px'}} className="Raised">Raised</span></div>
                    
                    <div class="p-2"><button type="button" className="btn">Apply Loan</button> <Link to="/Home/MCT2014/Payment"><button type="button" className="btn btn-success">Pay EMI</button></Link></div>
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
                            <h3 style={{ textAlign: 'left' }}>8/10</h3>
                        </div>
                    </div>


                </div>

                <div className="d-flex p-3" style={{ backgroundColor: 'white' }}>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 1 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(1)} style={{ cursor: 'pointer' }}>Transactions</span>
                    </div>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 2 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(2)} style={{ cursor: 'pointer' }}>Members</span>
                    </div>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 3 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(3)} style={{ cursor: 'pointer' }}>Info</span>
                    </div>
                </div>
                <div>
                    {
                        this.state.isTabActive == 1 ? <LastTransactionList /> : null
                    }

                </div>

                <div>
                    {
                        this.state.isTabActive == 2 ? <MemberListTable /> : null
                    }

                </div>

                <div>
                    {
                        this.state.isTabActive == 3 ? <InfoList /> : null
                    }
                </div>
            </div>
        )
    }
}
export default ChitDescription;
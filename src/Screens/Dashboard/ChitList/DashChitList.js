import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashChitList extends Component {
    render() {
        return (
            <div>
                <div className="SectionHeading">
                    <span >Your Chits</span>
                </div>
                <div className="row">
                    {
                        this.props.ChitList.map((chitlist, index) => {
                            return (
                                <div className="col-md-6 col-sm-12" >
                                    <Link to="/Home/Group/ChitDescription/MCT2014" style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="card" style={{ width: '95%', fontSize: '16px' }}>

                                            <div style={{ backgroundColor: '#ff9900', padding: '10px 15px' }}>
                                                <h4 style={{ color: 'white' }}>{chitlist.chitname}</h4>
                                            </div>

                                            <div className="card-body">
                                                <div style={{ marginBottom: '10px', marginTop: '10px' }}>
                                                    <div className="row">
                                                        <div className="col-md-6" style={{ textAlign: 'left' }}>
                                                            <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.value}</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'left' }}>
                                                            <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.emi}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6" style={{ textAlign: 'left', fontSize: '12px', color: '#acacac' }}>
                                                            <span>Value</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'left', fontSize: '12px', color: '#acacac' }}>
                                                            <span>EMI</span>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ marginTop: '10px' }}>
                                                        <div className="col-md-6" style={{ textAlign: 'left' }}>
                                                            <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.term}</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'left' }}>
                                                            <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.earned}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6" style={{ textAlign: 'left', fontSize: '12px', color: '#acacac' }}>
                                                            <span>Tenure</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'left', fontSize: '12px', color: '#acacac' }}>
                                                            <span>Earned</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    chitlist.loanamount != null ?

                                                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                                                            <div className="row">
                                                                <div className="col-md-6" style={{ textAlign: 'left' }}>
                                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.loanamount}</span>
                                                                </div>
                                                                <div className="col-md-6" style={{ textAlign: 'left' }}>
                                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.loanavailable}</span>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6" style={{ textAlign: 'left', fontSize: '12px', color: '#acacac' }}>
                                                                    <span>Loan Raised</span>
                                                                </div>
                                                                <div className="col-md-6" style={{ textAlign: 'left', fontSize: '12px', color: '#acacac' }}>
                                                                    <span>Loan Available</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        : null
                                                }

                                                <div>
                                                    <span className="ThirdBlack">Due Date: {chitlist.paydate}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>

                                                    <button type="button" className="btn btn-emi">Pay EMI</button>
                                                    <Link to="/Home/Group/ChitDescription/MCT2014" style={{ textDecoration: 'none', color: 'black' }}>
                                                        <button type="button" className="btn btn-view">View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default DashChitList;
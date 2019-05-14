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
                                <div className="col-md-4 col-sm-12" >
                                    <Link to="/Home/Group/ChitDescription/MCT2014" style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="card shadow" style={{ width: '95%', fontSize: '16px' }}>

                                            <div style={{ backgroundColor: '#E16666', padding: '10px 15px' }}>
                                                <h4 style={{ color: 'white' }}>{chitlist.chitname}</h4>
                                            </div>

                                            <div className="card-body">
                                                <div style={{ marginBottom: '10px', marginTop: '01px' }}>

                                                    <div className="row">
                                                        <div className="col-md-12" style={{ textAlign: 'center', fontSize: '12px', color: '#acacac' }}>
                                                            <span style={{ textAlign: 'center', fontSize: '12px', color: '#acacac', display: 'block' }}>Value</span>
                                                            <span style={{ fontSize: '32px', color: '#676767' }}>{chitlist.value}</span>
                                                        </div>

                                                    </div>
                                                    <div className="row" style={{marginTop:'20px'}}>
                                                        <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                            <span style={{ textAlign: 'center', fontSize: '12px', color: '#acacac', display: 'block' }}>Savings</span>
                                                            <span style={{ fontSize: '28px', color: '#676767', display: 'block' }}>{chitlist.savings}</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                            <span style={{ textAlign: 'center', fontSize: '12px', color: '#acacac', display: 'block' }}>Loan Available</span>
                                                            <span style={{ fontSize: '28px', color: '#676767' }}>{chitlist.loanavailable}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ marginTop: '20px' }}>

                                                        <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                            <span style={{ textAlign: 'center', fontSize: '12px', color: '#acacac', display: 'block' }}>EMI</span>
                                                            <span style={{ fontSize: '28px', color: '#676767', display: 'block' }}>{chitlist.emi}</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                            <span style={{ textAlign: 'center', fontSize: '12px', color: '#acacac', display: 'block' }}>Terms</span>
                                                            <span style={{ fontSize: '28px', color: '#676767' }}>{chitlist.term}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div>
                                                    <span className="ThirdBlack">Due Date: {chitlist.paydate}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                                    <button type="button" className="btn btn-emi">Avail Loan</button>
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
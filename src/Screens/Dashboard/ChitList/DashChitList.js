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
                                        <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                                            <div className="card-body">
                                                <h4 style={{ color: '#383838' }}>{chitlist.chitname}<span style={{ fontSize: '12px', backgroundColor: '#FF9900', padding: '0px 5px', borderRadius: '10px', color: 'white', marginLeft: '10px' }}>Raised</span></h4>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <div className="row">
                                                        <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                            <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.value}</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                            <span style={{ fontSize: '24px', color: '#676767' }}>{chitlist.emi}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6" style={{ textAlign: 'center', fontSize: '12px', color: '#acacac' }}>
                                                            <span>Value</span>
                                                        </div>
                                                        <div className="col-md-6" style={{ textAlign: 'center', fontSize: '12px', color: '#acacac' }}>
                                                            <span>EMI</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <table className="table" style={{ width: '100%' }}>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', padding: '10px 0px' }}>Term</td>
                                                        <td style={{ textAlign: 'right', padding: '10px 0px' }}>{chitlist.term}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', padding: '10px 0px' }}>Pay Date</td>
                                                        <td style={{ textAlign: 'right', padding: '10px 0px' }}>{chitlist.paydate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', padding: '10px 0px' }}>Loan Date</td>
                                                        <td style={{ textAlign: 'right', padding: '10px 0px' }}>{chitlist.loandate}</td>
                                                    </tr>
                                                </table>
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
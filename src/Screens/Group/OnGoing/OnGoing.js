import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OnGoing extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    {
                        this.props.OnGoingList.map((ongoinglist, index) => {
                            return (
                                <div className="col-md-4" >
                                    <Link to="/Home/Group/ChitDescription/MCT2014" style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                                            <div className="card-body">
                                                <h4 className="FirstBlack">{ongoinglist.chitname}</h4>

                                                <div className="row">
                                                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                        <span style={{ fontSize: '24px', color: '#676767' }}>{ongoinglist.value}</span>
                                                    </div>
                                                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                        <span style={{ fontSize: '24px', color: '#676767' }}>{ongoinglist.emi}</span>
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

                                                <table style={{ width: '100%' }}>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', padding: '10px 0px' }}>Term</td>
                                                        <td style={{ textAlign: 'right', padding: '10px 0px' }}>{ongoinglist.term}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', padding: '10px 0px' }}>Pay Date</td>
                                                        <td style={{ textAlign: 'right', padding: '10px 0px' }}>{ongoinglist.paydate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', padding: '10px 0px' }}>Loan Date</td>
                                                        <td style={{ textAlign: 'right', padding: '10px 0px' }}>{ongoinglist.loandate}</td>
                                                    </tr>
                                                </table>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                                    <button type="button" className="btn" style={{ backgroundColor: '#dedede', color: 'white' }}>Take Loan </button>
                                                    <button type="button" className="btn btn-success">Pay EMI</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            )
                        })
                    }
                </div>

            </div >
        );
    }
}

export default OnGoing;
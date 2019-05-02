import React, { Component } from 'react';

class Accepted extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.AcceptedList.map((acceptedlist, index) => {
                            return (
                                <div className="col-md-4" >
                                    <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                                        <div className="card-body">
                                            <h4 className="FirstBlack">{acceptedlist.chitname}</h4>

                                            <div className="row">
                                                <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{acceptedlist.value}</span>
                                                </div>
                                                <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{acceptedlist.emi}</span>
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
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Interest</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{acceptedlist.interest}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Term</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{acceptedlist.term}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Start Date</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{acceptedlist.startdate}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Acceptance</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{acceptedlist.accepted}</td>
                                                </tr>
                                            </table>
                                            <div className="d-flex flex-row-reverse" style={{ marginTop: '20px' }}>
                                                <button type="button" className="btn btn-success">Cancel Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }

                </div>
            </div>
        );
    }
}

export default Accepted;
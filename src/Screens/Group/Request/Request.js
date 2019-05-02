import React, { Component } from 'react';

class Request extends Component {
    render() {
        return (
            <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>

                <div className="row">
                    {
                        this.props.RequestList.map((requestlist, index) => {
                            return (
                                <div className="col-md-4" >
                                    <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                                        <div className="card-body">
                                            <h4 className="FirstBlack">{requestlist.chitname}</h4>


                                            <div className="row">
                                                <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{requestlist.value}</span>
                                                </div>
                                                <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{requestlist.emi}</span>
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
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Accepted</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px', color: '#676767' }}>{requestlist.accepted}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Interest</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px', color: '#676767' }}>{requestlist.interest}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Terms</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px', color: '#676767' }}>{requestlist.term}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Start Date</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px', color: '#676767' }}>{requestlist.startdate}</td>
                                                </tr>
                                            </table>
                                            <div className="d-flex flex-row-reverse" style={{ marginTop: '20px' }}>
                                                <button type="button" className="btn btn-success">Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        );
    }
}

export default Request;
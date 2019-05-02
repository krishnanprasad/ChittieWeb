import React, { Component } from 'react';

class Completed extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.CompletedList.map((completedlist, index) => {
                            return (
                                <div className="col-md-4" >
                                    <div className="card" style={{ width: '95%', fontSize: '16px' }}>
                                        <div className="card-body">
                                            <h4 className="FirstBlack">{completedlist.chitname}</h4>

                                            <div className="row">
                                                <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{completedlist.value}</span>
                                                </div>
                                                <div className="col-md-6" style={{ textAlign: 'center' }}>
                                                    <span style={{ fontSize: '24px', color: '#676767' }}>{completedlist.earned}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ textAlign: 'center', fontSize: '12px', color: '#acacac' }}>
                                                    <span>Value</span>
                                                </div>
                                                <div className="col-md-6" style={{ textAlign: 'center', fontSize: '12px', color: '#acacac' }}>
                                                    <span>Earned</span>
                                                </div>
                                            </div>


                                            <table style={{ width: '100%' }}>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Claimers</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{completedlist.claimers}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Completed</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{completedlist.completeddate}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'left', padding: '10px 0px' }}>Status</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 0px' }}>{completedlist.completedstatus}</td>
                                                </tr>
                                            </table>
                                            <div className="d-flex flex-row-reverse" style={{ marginTop: '20px' }}>
                                                <button type="button" className="btn btn-info">View</button>
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

export default Completed;
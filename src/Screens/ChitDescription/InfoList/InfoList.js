import React, { Component } from 'react';

class InfoList extends Component {
    render() {
        return (
            <div>
                 <div className="row" style={{ margin: '20px 0px 10px 0px' }}>
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

                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Bid Status</h5>
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


            </div>
        );
    }
}

export default InfoList;
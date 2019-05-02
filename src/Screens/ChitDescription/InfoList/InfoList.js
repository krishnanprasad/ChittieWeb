import React, { Component } from 'react';

class InfoList extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{ margin: '20px 0px 10px 0px' }}>
                    <div className="col-md-2">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Start Date</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>10-10-2019</h6>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Closing Date</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>10-08-2020</h6>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Payment Deadline</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>First 7 Days</h6>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Loan Date</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>First 7 Days</h6>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left', color: '#acacac' }}>Delay Charge</h6>
                        </div>
                        <div style={{ display: 'block' }}>
                            <h6 style={{ textAlign: 'left' }}>1% / day</h6>
                        </div>
                    </div>

                </div>

                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Current Appliers</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Term</td>
                            <td>Applied Date</td>
                            <td>Loan Date</td>
                            <td>User Name</td>
                            <td>CAP</td>

                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>#6</td>
                            <td>10-04-2019</td>
                            <td>12-04-2019</td>
                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>

                            <td>1,20,000</td>
                            <td>95,000</td>
                            <td>open</td>

                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Chit Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td>14.14.2019</td>
                        </tr>



                    </table>
                </div>


                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Chit Table</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Term</td>
                            <td>Last EMI Date</td>
                            <td>Loan Application Date</td>
                            <td>Loan Release Date</td>
                            <td>CAP</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>#1</td>
                            <td>10-12-2019</td>
                            <td>10-12-2019</td>
                            <td>14-12-2019</td>
                            <td>0</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>#2</td>
                            <td>10-01-2020</td>
                            <td>10-01-2020</td>
                            <td>14-01-2020</td>
                            <td>15,000</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>#3</td>
                            <td>10-02-2020</td>
                            <td>10-02-2020</td>
                            <td>14-02-2020</td>
                            <td>30,000</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>#4</td>
                            <td>10-03-2020</td>
                            <td>10-03-2020</td>
                            <td>14-03-2020</td>
                            <td>45,000</td>
                        </tr>

                    </table>
                </div>



            </div>
        );
    }
}

export default InfoList;
import React, { Component } from 'react';

class DueComponent extends Component {
    render() {
        return (
            <div>
              
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
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
                            <td><button type="button" className="btn" style={{ backgroundColor: '#00cc00' }}>Pay</button></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td><button type="button" className="btn" style={{ backgroundColor: '#00cc00' }}>Pay</button></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td> <button type="button" className="btn" style={{ backgroundColor: '#bfbfbf' }}>Pay</button></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>
                                4420
                          </td>
                            <td>

                                <button type="button" className="btn" style={{ backgroundColor: '#bfbfbf' }}>Pay</button></td>
                        </tr>

                    </table>
                </div>

            </div>
        );
    }
}

export default DueComponent;
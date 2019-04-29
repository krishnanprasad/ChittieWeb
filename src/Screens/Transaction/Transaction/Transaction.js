import React, { Component } from 'react';

class Transaction extends Component {
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
                            <td><span style={{ color: '#00cc00' }}>Success</span></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td><span style={{ color: '#00cc00' }}>Success</span></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td><span style={{ color: '#00cc00' }}>Success</span></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>Group Name</td>
                            <td>CAP</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td><span style={{ color: '#f44336' }}>Failed</span></td>
                        </tr>

                    </table>
                </div>


            </div>
        );
    }
}

export default Transaction;
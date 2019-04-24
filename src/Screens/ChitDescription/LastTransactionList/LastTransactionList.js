import React, { Component } from 'react';

class LastTransactionList extends Component {
    render() {
        return (
            <div>
                  <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Last Transaction</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>@username</td>

                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>@username</td>

                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>@username</td>

                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>@username</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Transaction ID</td>
                            <td>Transaction Date</td>
                            <td>@username</td>

                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>

                    </table>
                </div>

            </div>
        );
    }
}

export default LastTransactionList;
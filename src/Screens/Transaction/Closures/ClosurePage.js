import React, { Component } from 'react';

class ClosurePage extends Component {
    render() {
        return (
            <div>
               
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Chit</td>
                            <td>Amount</td>
                            <td>TransactionID</td>
                            <td>Date</td>
                            <td>Status</td>

                        </tr>
                        <tr className='BodyRow'>
                            <td>Chit</td>
                            <td>Amount</td>
                            <td>TransactionID</td>
                            <td>Date</td>
                            <td><span style={{ color: '#00cc00' }}>Pay</span></td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>Chit</td>                          
                            <td>Amount</td>
                            <td>TransactionID</td>
                            <td>Date</td>
                            <td><span style={{ color: '#00cc00' }}>Pay</span></td>
                        </tr>


                    </table>
                </div>
            </div>
        );
    }
}

export default ClosurePage;
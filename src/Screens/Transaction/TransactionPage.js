import React, { Component } from 'react';
import './TransactionPage.css';


class TransactionPage extends Component {
    render() {
        return (
            <div style={{ marginLeft: '22%', width: '78%' }}>


                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Last Transaction</h3>
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
                        <td><span style={{backgroundColor:'#00cc00',color:'white',padding:'5px 15px',borderRadius:'25px'}}>Paid</span></td>
                    </tr>
                    <tr className='BodyRow'>
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
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>

                </table>


                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Upcoming Payables</h3>
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
                        <td><button type="button" className="btn" style={{ backgroundColor: '#00cc00' }}>Pay</button></td>
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

                            <button type="button" className="btn" style={{ backgroundColor: '#00cc00' }}>Pay</button></td>
                    </tr>

                </table>


                <h3 style={{ textAlign: 'left', marginTop: '100px', marginBottom: '30px' }}>Bid Status</h3>
                <table className="HeaderTable" style={{ width: '100%' }}>
                    <tr className='HeaderRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Applied Date</td>
                        <td>Bid Date</td>
                        <td>Bidders</td>                        
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
                        <td>16.16.2019</td>
                        <td>#6</td>
                        <td>Open</td>  
                        <td><button type="button" className="btn" style={{ backgroundColor: 'red',color:'white' }}>Reverse Bid</button></td>
                    </tr>
                    <tr className='BodyRow'>
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
                        <td>Status</td>
                    </tr>
                    <tr className='BodyRow'>
                        <td>Transaction ID</td>
                        <td>Transaction Date</td>
                        <td>Group Name</td>
                        <td>CAP</td>
                        <td>Term</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>

                </table>




            </div>
        )
    }
}

export default TransactionPage;
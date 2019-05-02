import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Transaction ID</td>
                            <td>Paid Date</td>
                            <td>Chit Name</td>
                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>   
                        {
                            this.props.TransactionList.map((transactionlist, index) => {
                                return (
                                    <tr className='BodyRow'>
                                        <td>{transactionlist.transactionid}</td>
                                        <td>{transactionlist.paiddate}</td>
                                        <td>{transactionlist.chitname}</td>
                                        <td>{transactionlist.term}</td>
                                        <td>{transactionlist.amount}</td>
                                        <td><span style={{ color: '#00cc00' }}>{transactionlist.status}</span></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>


            </div>
        );
    }
}

export default Transaction;
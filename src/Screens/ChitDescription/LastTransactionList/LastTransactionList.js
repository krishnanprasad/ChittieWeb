import React, { Component } from 'react';
import './LastTransaction.css'
class LastTransactionList extends Component {
    render() {
        return (
            <div>

                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Transactions</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Trasaction ID</td>
                            <td>User Name</td>
                            <td>Interest</td>
                            <td>Fine</td>
                            <td>Total</td>
                            
                        </tr>

                        {
                            this.props.ChitDetails.LastTransactionList.map((transactiondetails, index) => {
                                return (
                                    <tr className={`BodyRow ${transactiondetails.paidstatus === true ? null : 'usernotpaid'}`}>

                                        <td>{transactiondetails.transactionid}</td>
                                        <td>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">{transactiondetails.username}</span>
                                        </td>

                                        <td>{transactiondetails.interest}</td>
                                        <td>{transactiondetails.fine}</td>
                                        <td>{transactiondetails.amount}</td>
                                        <td>{transactiondetails.paid}</td>
                                        <td>{transactiondetails.status}</td>
                                    </tr>
                                )
                            })
                        }






                    </table>
                </div>


                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Loan Bids</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>

                            <td>Username</td>

                            <td>Term</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        {
                            this.props.ChitDetails.LoanList.map((loanlist, index) => {
                                return (

                                    <tr className={`BodyRow ${loanlist.bidstatus === true ? 'bidwon' : null}`}>
                                        <td>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">{loanlist.username}</span>
                                        </td>

                                        <td>{loanlist.cap}</td>
                                        <td>{loanlist.loanamount}</td>
                                        <td>{loanlist.status}</td>
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

export default LastTransactionList;
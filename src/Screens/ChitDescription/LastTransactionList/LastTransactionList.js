import React, { Component } from 'react';
import './LastTransaction.css'
class LastTransactionList extends Component {
    render() {
        return (

            <div>

                <div className="ShadowTable" style={{ padding: '15px 10px' }}>
                    <div className="row">
                        <div className="col-md-3">
                            <span className="SecondBlack" style={{fontSize:'26px'}}>6</span>
                        </div>
                        <div className="col-md-3">
                            <span className="SecondBlack" style={{fontSize:'26px'}}>6000</span>
                        </div>
                        <div className="col-md-3">
                            <span className="SecondBlack" style={{fontSize:'26px'}}>1850</span>
                        </div>
                        <div className="col-md-3">
                            <span className="SecondBlack" style={{fontSize:'26px'}}>3</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <span className="ThirdBlack">Tenure</span>
                        </div>
                        <div className="col-md-3">
                            <span className="ThirdBlack">EMI</span>
                        </div>
                        <div className="col-md-3">
                            <span className="ThirdBlack">Earned</span>
                        </div>
                        <div className="col-md-3">
                            <span className="ThirdBlack">Remaining Payers</span>
                        </div>
                    </div>

                </div>
                <div className="SectionHeading">
                    <span >Transactions</span>
                </div>
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


                <div className="SectionHeading">
                    <span >Loan</span>
                </div>
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
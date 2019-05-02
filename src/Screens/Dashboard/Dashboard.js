import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import DashboardData from '../../Services/Dashboard.json';
import DashChitList from './ChitList/DashChitList';
class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    DashChitList() {
        if (DashboardData.ChitList.length > 0) {
            return <DashChitList ChitList={DashboardData.ChitList} />
        }
        else {
            return <Link to={'/Home/CreateChit'}>
            <button type="button" class="btn btn-primary btn-lg btn-block">Create Chit</button>
            </Link>
        }
    }
    render() {

        return (
            <div className="Dashboard">

                <div className="col-md-12 main" style={{ marginTop: '25px' }}>
                    <div className="row Shadow" style={{ margin: '10px 0px 20px 0px', backgroundColor: 'white' }}>
                        <div className="col-md-3">
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneHeader">Total Groups</span>
                            </div>
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneFooter">{DashboardData.Details.totalchits}</span>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneHeader">EMI/month</span>
                            </div>
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneFooter">{DashboardData.Details.totalemi}</span>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneHeader">Loan Raised</span>
                            </div>
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneFooter">{DashboardData.Details.loanraised}</span>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneHeader">Earned</span>
                            </div>
                            <div style={{ display: 'block' }}>
                                <span className="SectionOneFooter">{DashboardData.Details.earned}</span>
                            </div>
                        </div>
                    </div>

                    {this.DashChitList()}
                    {/* <DashChitList ChitList={DashboardData.ChitList} /> */}

                    <div className="SectionHeading">
                        <span >Last Transactions</span>
                    </div>
                    <div className="ShadowTable table-responsive">
                        <table className="HeaderTable" style={{ width: '100%' }}>
                            <tr className='HeaderRow'>
                                <td>Chit Name</td>
                                <td>Transaction ID</td>
                                <td>Transaction Date</td>
                                <td>Term</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                            {
                                DashboardData.TransactionList.map((transactionlist, index) => {
                                    return (
                                        <tr className='BodyRow'>
                                            <td>{transactionlist.chitname}</td>
                                            <td>{transactionlist.transactionid}</td>
                                            <td>{transactionlist.transactiondate}</td>

                                            <td>{transactionlist.term}</td>
                                            <td>{transactionlist.amount}</td>
                                            <td>{transactionlist.status}</td>
                                        </tr>
                                    )
                                })
                            }


                        </table>
                    </div>

                    <div className="SectionHeading">
                        <span>Loan Status</span>
                    </div>
                    <div className="ShadowTable">
                        <table className="HeaderTable" style={{ width: '100%' }}>
                            <thead>
                                <tr className='HeaderRow'>

                                    <td>Chit Name</td>
                                    <td>Term</td>
                                    <td>CAP</td>
                                    <td>Your Bid</td>
                                    <td>Last date</td>
                                    <td>Loan Applicants</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    DashboardData.LoanList.map((loanlist, index) => {
                                        return (
                                            <tr className='BodyRow'>
                                                <td>{loanlist.chitname}</td>
                                                <td>{loanlist.term}</td>
                                                <td>{loanlist.cap}</td>
                                                <td>{loanlist.loanamount}</td>
                                                <td>{loanlist.loanlastdate}</td>
                                                <td>{loanlist.totalapplicants}</td>
                                                <td>{loanlist.status}</td>
                                            </tr>
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;
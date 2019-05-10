import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Redirect } from 'react-router-dom';
import DashboardData from '../../Services/Dashboard.json';
import DashChitList from './ChitList/DashChitList';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isUserLoggedIn: false
        };
        debugger
    }


    componentDidMount() {
        debugger;
        if (sessionStorage.getItem('userid') != 'null') {

            console.log('User ID is :' + sessionStorage.getItem('userid'));
            this.state.isUserLoggedIn = true;
            console.log('user state:' + this.state.isUserLoggedIn)
        }
    }



    DashChitList() {
        debugger;
        if (DashboardData.ChitList.length > 0) {
            return <DashChitList ChitList={DashboardData.ChitList} />
        }
        else {
            return <Link to={'/Home/CreateChit'}>
                <button type="button" class="btn btn-primary btn-lg btn-block">Create Chit</button>
            </Link>
        }
    };

    render() {

        return (

            <div className="Dashboard">
                {

                    (this.state.isUserLoggedIn == false) ?
                        <div className="col-md-12 main" style={{ marginTop: '25px' }}>
                            <div className="row" style={{ margin: '10px 0px 20px 0px' }}>

                                <div className="col-md-3 col-sm-12">
                                    <div className="d-flex flex-column" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)',backgroundColor:'white',borderLeft:'5px solid #2196f3' }}>
                                        <div className="" style={{ textAlign: "center", paddingTop: '5px' }}>
                                            <span style={{ fontSize: '18px',color: '#2196f3',fontWeight:'600' }}>Total Chits</span>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: '10px', paddingBottom: '10px' }}>
                                            <span className="SecondBlack" style={{ fontSize: '28px' }}>{DashboardData.Details.totalchits}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="d-flex flex-column" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)',backgroundColor:'white',borderLeft:'5px solid #ff00aa'  }}>
                                        <div className="" style={{ textAlign: "center", paddingTop: '5px',  }}>
                                            <span className="ThirdWhite" style={{ fontSize: '18px',color: '#ff00aa',fontWeight:'600' }}>Savings</span>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: '10px', paddingBottom: '10px' }}>
                                            <span className="SecondBlack" style={{ fontSize: '28px' }}>{DashboardData.Details.savings}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="d-flex flex-column" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)',backgroundColor:'white',borderLeft:'5px solid #6f42c1'  }}>
                                        <div className="" style={{ textAlign: "center", paddingTop: '5px', }}>
                                            <span className="ThirdWhite" style={{ fontSize: '18px',color: '#6f42c1',fontWeight:'600' }}>Loan Raised</span>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: '10px', paddingBottom: '10px' }}>
                                            <span className="SecondBlack" style={{ fontSize: '28px' }}>{DashboardData.Details.loanraised}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="d-flex flex-column" style={{ display: 'block', boxShadow: '5px 3px 5px 0px rgba(237, 237, 237, 1)',backgroundColor:'white',borderLeft:'5px solid #3ecabf'  }}>
                                        <div className="" style={{ textAlign: "center", paddingTop: '5px',  }}>
                                            <span className="ThirdWhite" style={{ fontSize: '18px',color: '#3ecabf',fontWeight:'600' }}>Earned</span>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: '10px', paddingBottom: '10px' }}>
                                            <span className="SecondBlack" style={{ fontSize: '28px' }}>{DashboardData.Details.earned}</span>
                                        </div>
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
                        : <Redirect to="/" />
                }
            </div >
        );
    }
}

export default Dashboard;
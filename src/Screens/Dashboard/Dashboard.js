import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Redirect } from 'react-router-dom';
import DashboardData from '../../Services/Dashboard.json';
import DashChitList from './ChitList/DashChitList';
import axios from "axios";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isUserLoggedIn: false
        };

    }


    componentDidMount() {

        if (sessionStorage.getItem('userid') != 'null') {

            console.log('User ID is :' + sessionStorage.getItem('userid'));
            this.state.isUserLoggedIn = true;
            console.log('user state:' + this.state.isUserLoggedIn)
        }

        axios.get('http://mynonymous.xyz/api/ChitDescription/UserChitConnections?UserId=U1-979-Kri', {}).then((res) => {
            //on success
           
            var ed = res.data
          
        }).catch((error) => {
            //on error
            alert('There is an error in API call.');
        });
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
    };

    render() {

        return (

            <div className="Dashboard">
                {

                    (this.state.isUserLoggedIn == false) ?
                        <div className="col-md-12 main" style={{ marginTop: '25px' }}>
                            <div className="row" style={{ margin: '10px 0px 20px 0px' }}>
                            <div className="col-md-3">
                                <div className="d-flex CardDisplay" style={{ display: 'block' }}>
                                    <div style={{ padding: '5px' }}>
                                        <div style={{ marginTop: '10px', marginBottom: '10px', padding: '5px 10px', borderRadius: '25px', backgroundColor: '#868686' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#868686' }}>Total Chits</h6>
                                        <h3 style={{ textAlign: 'left', color: ' #636363' }}>{DashboardData.Details.totalchits}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="d-flex CardDisplay" style={{ display: 'block' }}>
                                    <div style={{ padding: '5px' }}>
                                        <div style={{ marginTop: '10px', marginBottom: '10px', padding: '5px 10px', borderRadius: '25px', backgroundColor: '#e6ad00' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#e6ad00' }}>Total Savings</h6>
                                        <h3 style={{ textAlign: 'left', color: ' #e6ad00' }}>{DashboardData.Details.savings}</h3>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-md-3">
                                <div className="d-flex CardDisplay" style={{ display: 'block' }}>
                                    <div style={{ padding: '5px' }}>
                                        <div style={{ marginTop: '10px', marginBottom: '10px', padding: '5px 10px', borderRadius: '25px', backgroundColor: '#17a2b8' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#17a2b8' }}>Loan Available</h6>
                                        <h3 style={{ textAlign: 'left', color: ' #17a2b8' }}>{DashboardData.Details.loanavailable}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex CardDisplay" style={{ display: 'block' }}>
                                    <div style={{ padding: '5px' }}>
                                        <div style={{ marginTop: '10px', marginBottom: '10px', padding: '5px 10px', borderRadius: '35px', backgroundColor: '#28a745' }}>
                                            <img src={require("../../../src/assets/icons/calendar.png")} style={{ width: '32px', height: '32px' }} alt="userimage" />

                                        </div>
                                    </div>

                                    <div className="flex-grow-1" style={{ padding: '5px 10px' }}>
                                        <h6 style={{ textAlign: 'left', color: '#28a745' }}>Earned</h6>
                                        <h3 style={{ textAlign: 'left', color: ' #28a745' }}>{DashboardData.Details.earned}</h3>
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
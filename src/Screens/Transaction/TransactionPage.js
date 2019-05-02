import React, { Component } from 'react';
import './Transaction/Transaction';
import LoanPage from './Loan/LoanPage';
import ClosurePage from './Closures/ClosurePage';
import Transaction from './Transaction/Transaction';
import DueComponent from './Due/DueComponent';
import TransactionData from '../../Services/Transaction.json';

class TransactionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isTabActive: 1 };

    }
    ChangeTab = (tabval) => {
        this.setState({ isTabActive: tabval });
    }
    render() {
        return (
            <div>
                <h6 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '20px' }}>Current</h6>
                <div className="ShadowTable" style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>EMI</td>
                            <td>EMI Paid</td>
                            <td>Loan Raised</td>
                            <td>Earned</td>
                            <td>Fine</td>

                        </tr>
                        <tr className='BodyRow'>
                            <td>132</td>
                            <td>16,500</td>
                            <td>1,60,600</td>
                            <td><span style={{ color: '#00cc00' }}>2,852</span></td>
                            <td><span style={{ color: 'red' }}>21</span></td>

                        </tr>

                    </table>
                </div>




                <div className="col-md-12 main">

                    <div className="d-flex" style={{ backgroundColor: 'white', marginTop: '20px', fontSize: '18px',borderTop:'3px solid #ff9900' }}>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 1 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(1)} style={{ cursor: 'pointer' }}>Transactions</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 2 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(2)} style={{ cursor: 'pointer' }}>Laons</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 3 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(3)} style={{ cursor: 'pointer' }}>Closures</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 4 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(4)} style={{ cursor: 'pointer' }}>Due</span>
                        </div>

                    </div>
                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 1 ? <Transaction TransactionList={TransactionData.TransactionList} /> : null
                        }

                    </div>

                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 2 ? <LoanPage LoanList={TransactionData.LoanList}/> : null
                        }

                    </div>

                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 3 ? <ClosurePage ClosureList={TransactionData.ClosureList}/> : null
                        }
                    </div>

                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 4 ? <DueComponent DueList={TransactionData.DueList}/> : null
                        }
                    </div>

                </div>



            </div>
        )
    }
}

export default TransactionPage;
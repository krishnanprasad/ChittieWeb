import React, { Component } from 'react';
import DebitCardPage from './DebitCardPage/DebitCardPage';
import CreditCardPage from './CreditCardPage/CreditCardPage';
import UPIPage from './UPIPage/UPIPage';


class PaymentPage extends Component {
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

                <div style={{marginTop:'30px',marginBottom:'20px'}}>
                    <p><h5>MCT 2014 Batch -2</h5></p>
                    <p><span style={{color:'#c5c5c5'}}>Total Amount to be Paid</span></p>
                    <p><h5>1714</h5></p>
                    <p><span style={{color:'#c5c5c5'}}>Split</span></p>
                    <p><h5>1500 + 214</h5></p>
                    <p><h5>Tenure:8/10</h5></p>
                </div>

                <div className="d-flex p-3" style={{ backgroundColor: 'white' }}>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 1 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(1)} style={{ cursor: 'pointer' }}>Credit Card</span>
                    </div>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 2 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(2)} style={{ cursor: 'pointer' }}>UPI</span>
                    </div>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 3 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(3)} style={{ cursor: 'pointer' }}>Debit Card</span>
                    </div>
                </div>



                <div>
                    {
                        this.state.isTabActive == 1 ? <CreditCardPage /> : null
                    }

                </div>

                <div>
                    {
                        this.state.isTabActive == 2 ? <UPIPage /> : null
                    }

                </div>

                <div>
                    {
                        this.state.isTabActive == 3 ? <DebitCardPage /> : null
                    }
                </div>


            </div>
        );
    }
}

export default PaymentPage;
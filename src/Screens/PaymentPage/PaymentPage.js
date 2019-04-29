import React, { Component } from 'react';
import DebitCardPage from './DebitCardPage/DebitCardPage';
import CreditCardPage from './CreditCardPage/CreditCardPage';
import UPIPage from './UPIPage/UPIPage';
import { Link } from 'react-router-dom';

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
                <Link to="/Home/Group/ChitDescription/MCT2014">
                    <button type="button" className="btn btn-dark">back</button>
                </Link>
                <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                    <p><h5>MCT 2014 Batch -2</h5></p>

                </div>
                <div className="ShadowTable" style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Tenure</td>
                            <td>Amount</td>
                            <td>EMI</td>
                            <td>Interest</td>
                            <td>Fine</td>

                        </tr>
                        <tr className='BodyRow'>
                            <td>#1</td>
                            <td>16,500</td>
                            <td>600</td>
                            <td>600</td>
                            <td><span style={{ color: '#00cc00' }}>2,852</span></td>
                        </tr>

                    </table>
                </div>

                <div className="d-flex" style={{ backgroundColor: 'white',borderTop:'3px solid #ff9900' }}>
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
import React, { Component } from 'react';
import LastTransactionList from '../LastTransactionList/LastTransactionList';
import TenureDetail from '../../../Services/ChitTenure.json'
class ChitDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { isTabActive: 3 };

    }
    ChangeTab = (tabval) => {
        this.setState({ isTabActive: tabval });
    }
    render() {
        return (
            <div>
                {/* <div className="d-flex p-3" style={{ backgroundColor: 'white' }}>

                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 1 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(1)} style={{ cursor: 'pointer' }}>Transactions</span>
                    </div>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 2 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(2)} style={{ cursor: 'pointer' }}>Members</span>
                    </div>
                    <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 3 ? 'tabactive' : 'tabnotactive'}`}>
                        <span onClick={() => this.ChangeTab(3)} style={{ cursor: 'pointer' }}>Info</span>
                    </div>
                </div>
                <div>
                    {
                        this.state.isTabActive == 1 ? <LastTransactionList /> : null
                    }

                </div>

                <div>
                    {
                        this.state.isTabActive == 2 ? <MemberListTable /> : null
                    }

                </div>

                <div>
                    {
                        this.state.isTabActive == 3 ? <InfoList /> : null
                    }
                </div> */}

                <LastTransactionList ChitDetails={TenureDetail.chitdetails}/>
            </div>
        );
    }
}

export default ChitDetail;
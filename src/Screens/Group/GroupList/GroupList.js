import React, { Component } from 'react';
import OnGoing from '../OnGoing/OnGoing';
import Accepted from '../Accepted/Accepted';
import Completed from '../Completed/Completed';
import Request from '../Request/Request';
import GroupListData from '../../../Services/GroupList.json';

class GroupList extends Component {
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
                <div className="col-md-12 main">

                    <div className="d-flex" style={{ backgroundColor: 'white', marginTop: '20px', fontSize: '18px',borderTop:'3px solid #ff9900' }}>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 1 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(1)} style={{ cursor: 'pointer' }}>On Going</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 2 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(2)} style={{ cursor: 'pointer' }}>Accepted</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 3 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(3)} style={{ cursor: 'pointer' }}>Completed</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 4 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(4)} style={{ cursor: 'pointer' }}>Request</span>
                        </div>

                    </div>
                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 1 ? <OnGoing OnGoingList={GroupListData.OnGoingList} /> : null
                        }

                    </div>

                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 2 ? <Accepted AcceptedList={GroupListData.AcceptedList}/> : null
                        }

                    </div>

                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 3 ? <Completed CompletedList={GroupListData.CompletedList}/> : null
                        }
                    </div>
                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 4 ? <Request RequestList={GroupListData.RequestList}/> : null
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default GroupList;
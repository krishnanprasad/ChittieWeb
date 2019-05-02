import React, { Component } from 'react';

class Notify extends Component {
    render() {
        return (
            <div>
                <h3 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '30px' }}>Date</h3>
                <div className="col-md-12">
                    <div className="row">
                        <div className="ShadowTable">
                            <table style={{ width: '100%' }}>
                            {
                                this.props.NotificationList.map((notificationlist,index) =>{
                                    return(
                                        <tr>
                                        <td>
                                            <div class="d-flex">
                                                <div class="p-2">
                                                    <img src={require("../../../../src/assets/icons/successful-transfer.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                                </div>
                                                <div class="p-2">{notificationlist.username} has paid #4 payment for {notificationlist.groupid}</div>
                                                <div class="p-2 ml-auto" style={{ fontSize: '14px', color: '#acacac' }}>10-06-2019 10:10am</div>
                                            </div>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                               

                               

                            </table>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Notify;
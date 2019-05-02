import React, { Component } from 'react';

class Invitation extends Component {
    render() {
        return (
            <div>
                <h3 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '30px' }}>Invitation List</h3>
                <div className="table ShadowTable">
                    <table className="table-responsive">
                        <thead>
                            <tr>
                                <td>Chit Name</td>
                                <td>Sum Value</td>
                                <td>Installements</td>
                                <td>Duration</td>
                                <td>Interest</td>
                                <td>Start Date</td>
                                <td>Mututal Connections</td>
                                <td>Accept</td>
                                <td>Reject</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.ChitInvitationList.map((notificationlist, index) => {
                                    return (
                                        <tr>
                                            <td>{notificationlist.chitname}</td>
                                            <td>{notificationlist.value}</td>
                                            <td>{notificationlist.emi}</td>
                                            <td>{notificationlist.term}</td>
                                            <td>{notificationlist.interest}</td>
                                            <td>{notificationlist.startdate}</td>
                                            <td>{notificationlist.mutualconnection}</td>
                                            <td><button type="button" className="btn btn-success">Accept</button></td>
                                            <td><button type="button" className="btn btn-danger">Reject</button></td>
                                        </tr>
                                    )
                                }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Invitation;
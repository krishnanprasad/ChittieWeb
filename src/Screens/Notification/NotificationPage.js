import React, { Component } from 'react'
import './NotificationPage.css';
import Invitation from './Invitation/Invitation';
import NotificationData from '../../Services/Notification.json';
import Notify from './Notify/Notify';
class NotificationPage extends Component {
    render() {
        return (
            <div>


                <Invitation ChitInvitationList={NotificationData.ChitInvitationList} />
                <Notify NotificationList={NotificationData.NotificationList} />

            </div>
        );

    }
}
export default NotificationPage;
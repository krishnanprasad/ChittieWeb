import React, { Component } from 'react';
import './ProfilePage.css';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ConnectionList from './Connection/ConnectionList';
import ProfileData from '../../Services/Profile.json';
class ProfilePage extends Component {
    render() {
        return (
            <div>
                <PersonalDetail PersonalDetail={ProfileData.PersonalDetail}/>
                <ConnectionList ConnectionList={ProfileData.ConnectionList}/>
            
              
            </div>
        );
    }
}
export default ProfilePage;
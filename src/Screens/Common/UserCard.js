import React, { Component } from 'react';
import './UserCard.css';
class UserCard extends Component {
    render() {
        return (
            <div>
                <div className="d-flex flex-row ">
                                    <div className="">
                                        <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    </div>
                                    <div className="">
                                        <div className="d-flex flex-column">
                                            <div className="">
                                                <span className="username SecondBlack">Test 4</span>
                                            </div>
                                            <div className="">
                                                <span className="userphone ThirdBlack">+91-8870009022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </div>
        );
    }
}

export default UserCard;
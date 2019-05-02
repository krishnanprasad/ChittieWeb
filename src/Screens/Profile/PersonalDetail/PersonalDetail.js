import React, { Component } from 'react';

class PersonalDetail extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '20px', }}>
                    <img src={require("../../../../src/assets/userimage.png")} style={{ width: '180px', height: '180px' }} alt="userimage" />
                    <div style={{ display: 'block', marginTop: '20px' }}>
                        <span style={{ fontSize: '30px' }}>Krishnan RA</span>
                    </div>
                    <div style={{ display: 'block', marginTop: '-10px' }}>
                        <span style={{ fontSize: '20px', color: '#acacac' }}>@krishnanra</span>
                    </div>
                </div>
                <h3 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>Basic Details</h3>
                <div className="col-md-12">
                    <div className="row">
                        <div className="ShadowTable">
                            <table>
                                <tr>
                                    <td className="Lefttd">Name</td>
                                    <td className="Righttd">{this.props.PersonalDetail.username}</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Email</td>
                                    <td className="Righttd">{this.props.PersonalDetail.useremail}</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Phone</td>
                                    <td className="Righttd">{this.props.PersonalDetail.userphone}</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Address</td>
                                    <td className="Righttd">{this.props.PersonalDetail.useraddress}</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Country</td>
                                    <td className="Righttd">{this.props.PersonalDetail.usercountry}</td>
                                </tr>
                            </table>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default PersonalDetail;
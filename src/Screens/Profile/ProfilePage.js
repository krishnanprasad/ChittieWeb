import React, { Component } from 'react';
import './ProfilePage.css';
class ProfilePage extends Component {
    render() {
        return (
            <div style={{ marginLeft: '22%', width: '78%' }}>

                <div style={{textAlign:'center',marginTop: '50px',}}>
                    <img src={require("../../../src/assets/userimage.png")} style={{ width: '180px', height: '180px' }} alt="userimage" />
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
                                    <td className="Righttd">Krishnan RA</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Email</td>
                                    <td className="Righttd">Krishnanprasad.93@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Phone</td>
                                    <td className="Righttd">+91-9790794621</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Address</td>
                                    <td className="Righttd">G 401,Shiram Sankari Apartment, Manish Nagar, Coimbatore 641027</td>
                                </tr>
                                <tr>
                                    <td className="Lefttd">Country</td>
                                    <td className="Righttd">India</td>
                                </tr>
                            </table>
                        </div>

                    </div>

                </div>
               
            </div>
        );
    }
}
export default ProfilePage;
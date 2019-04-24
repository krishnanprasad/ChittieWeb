import React, { Component } from 'react'

class MemberListTable extends Component {
    render() {
        return (
            <div>
                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Members</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>

                            <td>Memeber Name</td>
                            <td>Phone Number</td>
                            <td>Transaction Rating</td>
                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>+91-979079422</td>
                            <td>89.71</td>

                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>+91-8870009022</td>
                            <td>89.71</td>
                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>+91-8870009022</td>
                            <td>89.71</td>
                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>+91-8870009022</td>
                            <td>89.71</td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}

export default MemberListTable;
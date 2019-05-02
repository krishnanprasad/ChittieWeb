import React, { Component } from 'react';

class ConnectionList extends Component {
    render() {
        return (
            <div>
                <h5 style={{ textAlign: 'left', marginTop: '50px', marginBottom: '20px' }}>Connections</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>

                            <td>Memeber Name</td>
                            <td>Phone Number</td>
                            <td>Transaction Rating</td>
                        </tr>
                        {
                            this.props.ConnectionList.map((connectionlist,index)=>{
                                return(
                                    <tr className='BodyRow'>

                                    <td>
                                        <div>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">{connectionlist.username}</span>
                                        </div>
                                    </td>
                                    <td>{connectionlist.userphone}</td>
                                    <td>{connectionlist.chittierating}</td>
        
                                </tr>
                                )
                            })
                        }
                       
                        
                    </table>
                </div>

            </div>
        );
    }
}

export default ConnectionList;
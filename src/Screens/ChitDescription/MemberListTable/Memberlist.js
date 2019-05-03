import React, { Component } from 'react'
import UserCard from '../../Common/UserCard';

class MemberListTable extends Component {
    render() {
        return (
            <div>
                <h5 style={{ textAlign: 'left', marginTop: '0px', marginBottom: '20px' }}>Members</h5>
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>

                           


                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <UserCard />
                            </td>


                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <UserCard />
                            </td>


                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <UserCard />
                            </td>


                        </tr>
                        <tr className='BodyRow'>

                            <td>
                                <UserCard />
                            </td>


                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}

export default MemberListTable;
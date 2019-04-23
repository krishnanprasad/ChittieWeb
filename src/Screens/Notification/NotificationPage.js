import React, { Component } from 'react'
import './NotificationPage.css';

class NotificationPage extends Component {
    render() {
        return (
            <div>
                <h3 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '30px' }}>Date</h3>
                <div className="col-md-12">
                    <div className="row">
                        <div className="ShadowTable">
                            <table style={{ width: '100%' }}>
                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/successful-transfer.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">@Username has paid #4 payment for @Groupname</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/add-user.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">@Username has added @username2 added to @Groupname</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/bid.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">@Username has added bid for #6 in @goupname</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/loan.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">Loan transferred to @username for @Groupname</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/group.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">@Username has asked you to Join @Groupname</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/chit-started.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">@Groupname has announced chit start date</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="p-2">
                                                <img src={require("../../../src/assets/icons/paid.png")} style={{ width: '30px', height: '30px' }} alt="userimage" />
                                            </div>
                                            <div class="p-2">@You paid for #6 @groupname</div>
                                            <div class="p-2 ml-auto">Flex item 3</div>
                                        </div>
                                    </td>
                                </tr>

                            </table>
                        </div>

                    </div>

                </div>

            </div>
        );

    }
}
export default NotificationPage;
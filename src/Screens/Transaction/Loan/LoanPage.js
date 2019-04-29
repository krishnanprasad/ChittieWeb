import React, { Component } from 'react';

class LoanPage extends Component {
    render() {
        return (
            <div>
               
                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Chit</td>
                            <td>Username</td>
                            <td>Amount</td>
                            <td>Term</td>
                            <td>Interest</td>
                            <td>Status</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>MCT 2014</td>
                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>18,500</td>
                            <td>6/10</td>
                            <td>18 %</td>
                            <td>Won</td>

                        </tr>
                        <tr className='BodyRow'>
                            <td>MCT 2014</td>
                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>18,500</td>
                            <td>6/10</td>
                            <td>18 %</td>
                            <td>Won</td>
                        </tr>
                        <tr className='BodyRow'>
                            <td>MCT 2014</td>
                            <td>
                                <div>
                                    <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                    <span className="username">Test 4</span>
                                </div>
                            </td>
                            <td>18,500</td>
                            <td>6/10</td>
                            <td>18 %</td>
                            <td>Won</td>
                        </tr>

                    </table>
                </div>

            </div>
        );
    }
}

export default LoanPage;
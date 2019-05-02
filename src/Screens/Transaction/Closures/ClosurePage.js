import React, { Component } from 'react';

class ClosurePage extends Component {
    render() {
        return (
            <div>

                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Chit</td>
                            <td>Amount</td>
                            <td>TransactionID</td>
                            <td>Earned</td>

                            <td>Status</td>

                        </tr>
                        {
                            this.props.ClosureList.map((closurelist, index) => {
                                return (
                                    <tr className='BodyRow'>
                                        <td>{closurelist.chitname}</td>
                                        <td>{closurelist.transactionid}</td>
                                        <td>{closurelist.amount}</td>
                                        <td>{closurelist.earned}</td>
                                        <td>{closurelist.status}</td>
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

export default ClosurePage;
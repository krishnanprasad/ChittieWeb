import React, { Component } from 'react';

class LoanPage extends Component {
    render() {
        return (
            <div>

                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Chit</td>
                            <td>Amount</td>
                            <td>Term</td>
                            <td>Claimers</td>
                            <td>Status</td>
                        </tr>
                        {this.props.LoanList.map((loanlist, index) => {
                            return (
                                <tr className='BodyRow'>
                                    <td>{loanlist.chitname}</td>
                                    <td>{loanlist.amount}</td>
                                    <td>{loanlist.term}</td>
                                    <td>{loanlist.claimers}</td>
                                    <td>{loanlist.status}</td>
                                </tr>
                            )
                        })}

                    </table>
                </div>

            </div>
        );
    }
}

export default LoanPage;
import React, { Component } from 'react';

class DueComponent extends Component {
    render() {
        return (
            <div>

                <div className="ShadowTable">
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>Chit Name</td>                           
                            <td>Term</td>
                            <td>EMI</td>
                            <td>Last Date</td>
                            <td>Pay</td>
                        </tr>
                        {
                            this.props.DueList.map((duelist, index) => {
                                return (
                                    <tr className='BodyRow'>
                                        <td>{duelist.chitname}</td>
                                        <td>{duelist.term}</td>
                                        <td>{duelist.emi}</td>
                                        <td>{duelist.lastdate}</td>
                                        <td><button type="button" className="btn btn-success">Pay</button></td>
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

export default DueComponent;
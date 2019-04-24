import React, { Component } from 'react';




class UPIPage extends Component {
    render() {
        return (
            <div>
                <div className='card' style={{ padding: '15px', marginTop: '30px' }}>
                    <span style={{ display: 'block', marginBottom: '10px', marginTop: '10px', fontWeight: 'bold' }}>Enter your Virtual Payment Address(VPA)</span>
                    <input type="textbox" placeholder="Enter UPI ID" style={{ padding: '10px 5px' }} />
                    <span style={{ display: 'block', marginBottom: '10px', marginTop: '10px' }}>VPA is a unique payment address that can be linked to a person bank accounts to make payments</span>
                    <div style={{ textAlign: 'right' }}>
                        <button type="button" className="btn btn-default">Cancel</button>
                        <button type="button" className="btn btn-success">Pay</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UPIPage;
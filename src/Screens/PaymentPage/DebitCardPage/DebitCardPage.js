import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DebitCardPage extends Component {
    render() {
        return (
            <div>
                <div className='card' style={{ padding: '15px', marginTop: '30px' }}>

                    <div className="form-group">
                        <label for="usr">Name:</label>
                        <input type="text" className="form-control" id="usr" />
                    </div>

                    <div className="form-group">
                        <label for="usr">Card Number:</label>
                        <input type="text" className="form-control" id="usr" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="ex1">Expiry</label>
                            <input className="form-control" id="ex1" type="text" />
                        </div>

                        <div className="col-md-6">
                            <label for="ex1">CVV</label>
                            <input className="form-control" id="ex1" type="text" />
                        </div>
                    </div>


                    <div style={{ textAlign: 'right', marginTop: '20px' }}>
                        <button type="button" className="btn btn-default">Cancel</button>
                        <Link to="/Home/Transaction">
                            <button type="button" className="btn btn-success">Pay</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default DebitCardPage;
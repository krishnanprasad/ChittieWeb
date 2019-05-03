import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ApplyLoan extends Component {
    render() {
        return (
            <div>
                <Link to="/Home/Group/ChitDescription/MCT2014">
                    <button type="button" className="btn btn-dark">back</button>
                </Link>
                <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                    <p><h5>MCT 2014 Batch -2</h5></p>



                    <div class="d-flex shadow" style={{ backgroundColor: 'white', padding: '5px', marginBottom: '30px' }}>
                        <div class="p-2 flex-fill">
                            <div style={{ display: 'block' }}>
                                Tenure
                        </div>
                            <div>
                                03
                            </div>
                        </div>
                        <div class="p-2 flex-fill">
                            <div style={{ display: 'block' }}>
                                CAP
                            </div>
                            <div>
                                45000
                            </div>
                        </div>
                        <div class="p-2 flex-fill">
                            <div style={{ display: 'block' }}>
                                Interest
                            </div>
                            <div>
                                18%
                            </div>
                        </div>
                        <div class="p-2 flex-fill">
                            <div style={{ display: 'block' }}>
                                Last Date
                            </div>
                            <div>
                                22/10/2020
                            </div>
                        </div>
                    </div>


                    <div class="form-group row" style={{ marginBottom: "30px" }}>
                        <label for="chitname" class="col-sm-2 col-form-label">Enter Amount</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="chitname" placeholder="Enter Amount" />
                        </div>
                    </div>

                    <div class="form-group row" style={{ marginBottom: "30px" }}>
                        <label for="chitname" class="col-sm-2 col-form-label">Your Interest will be</label>
                        <div class="col-sm-10">
                            <h5>3,600</h5>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-info">Apply</button>
                    </div>
                </div>
                <h3>Bidders</h3>
                <div className="ShadowTable" style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <table className="HeaderTable" style={{ width: '100%' }}>
                        <tr className='HeaderRow'>
                            <td>User</td>
                            <td>Loan Amount</td>
                          


                        </tr>
                        <tr className='BodyRow'>
                            <td>
                                <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                <span className="username">username</span>
                            </td>
                            <td>16,500</td>                          
                        </tr>

                    </table>
                </div>
            </div>
        );
    }
}

export default ApplyLoan;
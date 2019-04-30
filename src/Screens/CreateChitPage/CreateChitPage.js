import React, { Component } from 'react';
import './CreateChitPage.css';
import Modal from '../Modal';

class CreateChitPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    };
    toggleModal = () => {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <div className="card Shadow" style={{marginTop:'20px'}}>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Create Chit</p>
                    <div class="form-group row" style={{ marginBottom: "30px" }}>
                        <label for="chitname" class="col-sm-2 col-form-label">Chit Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="chitname" placeholder="Enter Chit Name" />
                        </div>
                    </div>
                    <div class="form-group row" style={{ marginBottom: "30px" }}>
                        <label for="chittype" class="col-sm-2 col-form-label">Chit Type</label>
                        <div class="col-sm-10">
                            <select class="form-control" id="chittype">
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row" style={{ marginBottom: "30px" }}>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">CAP Type</label>
                            <select class="form-control" id="chittype">
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="tenure">Tenure</label>
                            <input type="text" class="form-control" id="tenure" placeholder="Enter Tenure" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="interestrate">Interest %</label>
                            <input type="text" class="form-control" id="interestrate" placeholder="Enter Interest" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="memberscount">Members</label>
                            <input type="text" class="form-control" id="memberscount" placeholder="Enter Total Members" />
                        </div>

                    </div>


                    <div class="form-row" style={{ marginBottom: "30px" }}>
                        <div class="form-group col-md-6">
                            <label for="startdate">Start Date</label>
                            <select class="form-control" id="startdate">
                                <option>Default select</option>
                            </select>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="delayfee">Delay Fee in %/Day</label>
                            <input type="text" class="form-control" id="delayfee" placeholder="Enter Delay Fee " />
                        </div>

                    </div>
                </div>
                <div className="d-flex flex-row-reverse" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <button type="button" className="btn btn-success">Create Chit</button>
                    <button type="button" className="btn btn-info" onClick={this.toggleModal} style={{ marginRight: "10px" }}>Add Members</button>
                </div>

                <div className="row">


                    <Modal show={this.state.isOpen}
                        onClose={this.toggleModal}>
                        <div className="">
                            <table className="HeaderTable" style={{ width: '100%' }}>
                                <tr className='BodyRow'>
                                    <td>
                                        <div>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">Test 4</span>
                                        </div>
                                    </td>
                                    <td>+91-979079422</td>
                                    <td><button type="button" className="btn">Invite</button></td>

                                </tr>
                                <tr className='BodyRow'>

                                    <td>
                                        <div>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">Test 4</span>
                                        </div>
                                    </td>
                                    <td>+91-8870009022</td>
                                    <td><button type="button" className="btn">Invite</button></td>
                                </tr>
                                <tr className='BodyRow'>

                                    <td>
                                        <div>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">Test 4</span>
                                        </div>
                                    </td>
                                    <td>+91-8870009022</td>
                                    <td><button type="button" className="btn">Invite</button></td>
                                </tr>
                                <tr className='BodyRow'>

                                    <td>
                                        <div>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">Test 4</span>
                                        </div>
                                    </td>
                                    <td>+91-8870009022</td>
                                    <td><button type="button" className="btn">Invite</button></td>
                                </tr>


                                <tr className='BodyRow'>

                                    <td>
                                        <div>
                                            <img className="userimage" src="http://placehold.it/150" alt="Image" />
                                            <span className="username">Test 4</span>
                                        </div>
                                    </td>
                                    <td>+91-8870009022</td>
                                    <td><button type="button" className="btn">Invite</button></td>
                                </tr>

                            </table>
                        </div>

                    </Modal>
                </div>
            </div>
        );
    }
}

export default CreateChitPage;
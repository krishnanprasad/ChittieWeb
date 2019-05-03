import React, { Component } from 'react';
import './GroupPage.css';
import ChitDescription from '../ChitDescription/ChitDescription';
import GroupList from './GroupList/GroupList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaymentPage from '../PaymentPage/PaymentPage';
import ApplyLoan from '../ApplyLoan/ApplyLoan';
class GroupPage extends Component {
  render() {
    return (
      <div>

        <Route path="/Home/Group/" exact component={GroupList} />
        <Route path="/Home/Group/ChitDescription/:id" exact component={ChitDescription} />
        <Route path="/Home/Group/ChitDescription/:Chitid/Payment" exact component={PaymentPage} />
        <Route path="/Home/Group/ChitDescription/:Chitid/ApplyLoan" exact component={ApplyLoan} />
      </div>
    );
  }
};

export default GroupPage;
import React, { Component } from 'react';
import './GroupPage.css';
import ChitDescription from '../ChitDescription/ChitDescription';
import GroupList from './GroupList/GroupList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaymentPage from '../PaymentPage/PaymentPage';
class GroupPage extends Component {
  render() {
    return (
      <div>

        <Route path="" exact component={GroupList} />
        <Route path="/ChitDescription/:id" exact component={ChitDescription} />
        <Route path="/ChitDescription/:Chitid/Payment" exact component={PaymentPage} />

      </div>
    );
  }
};

export default GroupPage;
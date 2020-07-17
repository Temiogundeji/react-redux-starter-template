import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from "./HomePage/HomePage";
import Login  from "./LoginPage/LoginPage";
import Register from "./RegisterPage/RegistrationPage";

import history from "./helpers/history";
import PrivateRoute from "./PrivateRoute";
import { connect } from 'react-redux';
import { alertActions } from './actions/alert-action';

class App extends Component {
  constructor(props){
    super(props);

    history.listen(( location, action ) => {
      this.props.clearAlerts();
    });
  }
  render() {
    return (
      <div>
        {
          alert.message &&
         <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history = {history}>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
}

const connectedApp = connect(mapStateToProps, actionCreators)(App);
export default connectedApp;

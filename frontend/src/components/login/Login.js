import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import { login } from '../../actions/authActions';
import { authErrors, isAuthenticated } from '../../reducers';

class Login extends Component {

  render() {
    const header = (
    <React.Fragment>
      <Topbar />
      <Navbar />
    </React.Fragment>
    )
    switch(this.props.isAuthenticated){
      case(true):
        return (
          <Redirect to="/" />
        )
      case(false):
        return (
          <div>
              { header }
            <LoginForm handleChange={ this.handleChange } {...this.props} />
          </div>
        )  
      }  
    }
  }

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {dispatch(login(username, password))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

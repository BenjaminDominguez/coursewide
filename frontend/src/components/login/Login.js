import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm';
import Header from '../layout/header/Header';
import { login } from '../../actions/authActions';
import { authErrors, isAuthenticated } from '../../reducers';
import Footer from '../layout/Footer';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password)
  }

  render() {
    switch(this.props.isAuthenticated){
      case(true):
        return (
          <Redirect to="/" />
        )
      case(false):
        return (
          <div>
            <Header />
            <LoginForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
            <Footer />
          </div>
        )  
      }  
    }
  }

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) => {dispatch(login(email, password))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

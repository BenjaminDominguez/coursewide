import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Run dispatch action here
  }

  render() {
    const header = (
    <React.Fragment>
      <Topbar />
      <Navbar />
    </React.Fragment>
    )
    return (
      <div>
        { header }
        <LoginForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
      </div>
    )
  }
}

export default Login;

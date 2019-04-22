import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props){
    super(props);
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
    this.props.onSubmit(this.state.username, this.state.password)
  }


  render() {
    return (
      <div>
        <div className="container form-container">
            <form onSubmit={ this.handleSubmit } id="login-form" className="register-form">
                  <div className="form-heading-bg">
                    <h1 className="form-heading"> Welcome back! </h1>
                    <p className="form-subheading">Enter your username and password below to get started. </p>
                  </div>
                    <div className="form-control">
                      <input onChange={ this.handleChange } name="username" className="form-input" type="text" placeholder="Enter a username" />
                    </div>
                    <div className="form-control">
                        <input onChange={ this.handleChange } name="password" className="form-input" type="password" placeholder="Password" />
                    </div>
                    <div className="step-button">
                        <button className="button-continue" type="submit">Login</button>
                    </div>
              </form>
          </div>
      </div>
    )
  }
}

export default LoginForm;
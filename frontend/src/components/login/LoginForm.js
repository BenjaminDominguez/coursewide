import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="container form-container">
            <form id="login-form" className="register-form">
                    <h1 className="form-heading"> Welcome back! </h1>
                    <p className="form-subheading">Enter your username and password below to get started. </p>
                    <div className="form-control">
                      <input onChange={ this.props.handleChange } name="username" className="form-input" type="text" placeholder="Enter a username" />
                    </div>
                    <div className="form-control">
                        <input onSubmit={ this.props.handleSubmit } name="password" className="form-input" type="password" placeholder="Password" />
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
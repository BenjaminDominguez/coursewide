import React, { Component } from 'react';

class LoginForm extends Component {


  render() {

    const { handleSubmit, handleChange } = this.props;

    return (
      <div>
        <div className="form-container">
            <form onSubmit={ handleSubmit } id="login-form" className="register-form">
                  <div className="form-heading-bg">
                    <h1 className="form-heading"> Welcome back! </h1>
                    <p className="form-subheading">Enter your email and password below to get started. </p>
                  </div>
                    <div className="form-control">
                      <input onChange={ handleChange } name="email" className="form-input" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="form-control">
                        <input onChange={ handleChange } name="password" className="form-input" type="password" placeholder="Password" />
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
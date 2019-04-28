import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authErrors } from '../../reducers';
import { clearErrors } from '../../actions/authActions';
import { Link } from 'react-router-dom';

class LoginForm extends Component {

  componentDidMount = () => this.props.clearErrors();

  render() {

    const { handleSubmit, handleChange, error } = this.props;

    return (
      <div>
        <div className="form-container">
            <form onSubmit={ handleSubmit } id="login-form" className="register-form">
                  <div className="form-heading-bg">
                    <h1 className="form-heading"> Welcome back! </h1>
                    <p className="form-subheading">Enter your email and password below to get started. </p>
                  </div>
                    { error ? error.msg ? <span className="flashed-message red small"> {error.msg} </span> : null : null}
                    <div className="form-control">
                      <input onChange={ handleChange } name="email" className="form-input" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="form-control">
                        <input onChange={ handleChange } name="password" className="form-input" type="password" placeholder="Password" />
                    </div>
                    <div className="step-button">
                        <button className="button-continue login-button" type="submit">Login</button>
                    </div>
                    <div className="form-control">
              <p>Not already a user?<Link className="register-here" to="/register"> Register here!</Link></p>
                    </div>
              </form>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: authErrors(state)
})

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
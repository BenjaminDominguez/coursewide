import React, { Component } from 'react';
import Header from '../layout/header/Header';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

const flashStyle = {
  textAlign: 'center',
  fontSize: '1.5rem',
  color: "#66a6ff"
}

class EmailPassword extends Component {


  render() {
    const { email, increment, password, handleChange, handlePasswordToggle, showPassword, message } = this.props;
    return (
      <div>
        <Header />
        <div className="form-container">
            <form className="register-form">
                { message ? <p style={flashStyle}>{ message }</p> : null }
                    <div className="form-heading-bg">
                      <h1 className="form-heading"> Sign up for coursewide. </h1>
                      <p className="form-subheading">Enter your email and a password to get started with coursewide today.</p>
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} value={email} name="email" className="form-input" type="text" placeholder="Email" />
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} type={showPassword ? "text" : "password"} value={password} name="password" className="form-input" placeholder="Password" />
                    </div>
                    <div className="form-control form-control-checkbox">
                    <input onClick={handlePasswordToggle} className="password-checkbox" name="checkbox" type="checkbox"/><p>Show password</p>
                    </div>
                    <div className="step-button">
                        <button onClick={increment} className="button-continue first-step" type="submit">Continue</button>
                    </div>
                    <div className="form-control">
                    <p>Already a user? <Link className="login-here" to="/login">Login here</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
      </div>
    )
  }
}

export default EmailPassword;
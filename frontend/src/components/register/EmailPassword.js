import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';



class EmailPassword extends Component {

  render() {
    const { state, handleChange, handlePassword, increment, showPassword } = this.props;
    return (
      <div>
        <Topbar />
        <Navbar />
        <div className="form-container">
            <form className="register-form">
                    <div className="form-heading-bg">
                      <h1 className="form-heading"> Register </h1>
                      <p className="form-subheading">Enter your email and a password to get started with CourseWide today!</p>
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} value={state.email} name="email" className="form-input" type="text" placeholder="Email" />
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} value={state.password} name="password" className="form-input" type={showPassword ? "text" : "password"} placeholder="Password" />
                    </div>
                    <div className="form-control">
                        <input onClick={handlePassword} className="password-checkbox" name="checkbox" type="checkbox"/><label for="checkbox">Show password</label>
                    </div>
                    <div className="step-button">
                        <button onClick={increment} className="button-continue" type="submit">Continue</button>
                    </div>
                    <div className="form-control">
                    <p>Already a user? <Link to="/login">Login here</Link></p>
                    </div>
                </form>
            </div>
      </div>
    )
  }
}

export default EmailPassword;
import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';



class EmailPassword extends Component {

  constructor(props){
    super(props);

    this.passwordLength = 10
    this.emailLength = 0

    this.state = {
      emailValid: null,
      emailMsg: 'This field is required',
      passwordValid: null,
      passwordMsg: 'Must be at least 10 characters'
    }
  }

  handleValidation = (e, field, fieldRequirement, fieldValid, onChange=false) => {
    this.props.validateLength(field, fieldRequirement) ? this.setState({[fieldValid]: true}) : this.setState({[fieldValid]: false})
    if (onChange) {
      this.props.handleChange(e)
    }
  }

  handleIncrement = (e) => {
    //form validation
    e.preventDefault()
    const { increment, email, password } = this.props;

    this.handleValidation(e, email, this.emailLength, 'emailValid')
    this.handleValidation(e, password, this.passwordLength, 'passwordLength')

    if (this.state.emailValid && this.state.passwordValid){
      increment();
  }
}

  render() {
    const { email, password, handlePassword, showPassword } = this.props;
    return (
      <div>
        <div className="form-container">
            <form className="register-form">
                    <div className="form-heading-bg">
                      <h1 className="form-heading"> Register </h1>
                      <p className="form-subheading">Enter your email and a password to get started with CourseWide today!</p>
                    </div>
                    <div className="form-control">
                        { this.state.emailValid === false ? <p className="flashed-form-message"> { this.state.emailMsg } </p> : null }
                        <input onChange={e => this.handleValidation(e, email, this.emailLength, 'emailValid', true)} value={email} name="email" className={this.state.emailValid === false ? "form-input invalid" : this.state.emailValid === null ? "form-input" : "form-input valid"} type="text" placeholder="Email" />
                    </div>
                    <div className="form-control">
                        {this.state.passwordValid === false ? <p className="flashed-form-message"> {this.state.passwordMsg} </p> : null}
                        <input onChange={e => this.handleValidation(e, password, this.passwordLength, 'passwordValid', true)} value={password} name="password" className={this.state.passwordValid === false ? "form-input invalid" : this.state.passwordValid === null ? "form-input" : "form-input valid"} type={showPassword ? "text" : "password"} placeholder="Password" />
                    </div>
                    <div className="form-control">
                        <input onClick={handlePassword} className="password-checkbox" name="checkbox" type="checkbox"/><label for="checkbox">Show password</label>
                    </div>
                    <div className="step-button">
                        <button onClick={this.handleIncrement} className="button-continue" type="submit">Continue</button>
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
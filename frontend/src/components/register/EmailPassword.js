import React, { Component } from 'react'
import Topbar from '../layout/Topbar'
import Navbar from '../layout/Navbar'

class EmailPassword extends Component {
  
  constructor() {
    super();
    //this needs to be added to API actions
    this.userAPIURL = 'http://localhost:8000/api/users/check_email/'
  }

  //Returns true if email already exists
  validateEmail = (e) => {
    const email = this.props.state.email;
    fetch(this.userAPIURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email": email})
    })
    .then((res) => res.json())
    //This returns a value, but I need to figure out how to access outside of scope
    .then((data) => console.log(data["email_exists"]))
  }

  handleIncrement = (e) => {
    if (this.validateEmail()){
      alert('Email already exists')
    } else {
      this.props.increment(e);
    }
  }

  render() {
    const { state, handleChange } = this.props;
    return (
      <div>
        <Topbar />
        <Navbar />
        <div className="container">
            <form className="register-form">
                    <h1 className="form-heading"> Register </h1>
                    <div className="form-control">
                        <input onChange={handleChange} value={state.email} name="email" className="form-input" type="text" placeholder="Email" />
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} value={state.password} name="password" className="form-input" type="password" placeholder="Password" />
                    </div>
                    <div className="step-button">
                        <button onClick={this.validateEmail} className="button-continue" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

export default EmailPassword;
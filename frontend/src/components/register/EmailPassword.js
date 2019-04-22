import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';



class EmailPassword extends Component {

  render() {
    const { state, handleChange, increment } = this.props;
    return (
      <div>
        <Topbar />
        <Navbar />
        <div className="container form-container">
            <form className="register-form">
                    <div className="form-heading-bg">
                      <h1 className="form-heading"> Register </h1>
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} value={state.email} name="email" className="form-input" type="text" placeholder="Email" />
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} value={state.password} name="password" className="form-input" type="password" placeholder="Password" />
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
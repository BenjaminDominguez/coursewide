import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import FlashedMessages from './FlashedMessages';

class Confirm extends Component {
    constructor() {
        super();
        this.checkEmailAPI = 'http://localhost/api/users/check_email'
        this.state = {
            flashedMessages: "",
            flashClass: ""
        }
    }

formattedState = () => Object.keys(this.props.state).map((field) => {
    if (field === 'step' || field === 'password') {
        return null;
    } else {
        let value = this.props.state[field];
        let key = field !== 'fullName' ? field : 'full name';
        return (
            <div className="confirm-register-content">
            <h1>{key}</h1>
            <p>{value}</p>
            </div>
        )
    }

})

//new on click event

  render() {

    const { decrement, increment } = this.props;
    return (
    <div>
    <Topbar />
    <Navbar />
      <div className="form-container">
      <div className="confirm-register">
            <FlashedMessages flashClass={this.state.flashClass} message={this.state.flashedMessages} />
            {this.formattedState() }
        <div className="buttons">
            <div className="step-button">
                <button onClick={ increment } className="button-continue last-step" type="submit">Register</button>
            </div>
            <div className="step-button">
                <button onClick={ decrement } className="button-back" type="submit">Go back</button>
            </div>
        </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Confirm;
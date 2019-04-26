import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';

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
        <Header />
      <div className="form-container">
      <div className="confirm-register">
            { this.props.flashedMessages }
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
      <Footer />
    </div>
    )
  }
}

export default Confirm;
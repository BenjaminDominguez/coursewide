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

validateInformation = () => {
    //ensure all fields are not empty
    const { state } = this.props;
    let values = Object.values(state);
    console.log(values)
    for (let value in values) {
        //if value of a state object is equal to ""
        if (value === null){
            this.setState({flashedMessages: "Please fill in all fields", flashClass: "red"})
            // return nothing to stop the function
            return
        }
    }
}

  render() {

    const { decrement } = this.props;
    return (
    <div>
    <Topbar />
    <Navbar />
      <div className="container">
      <div className="confirm-register">
            <FlashedMessages flashClass={this.state.flashClass} message={this.state.flashedMessages} />
            {this.formattedState() }
        <div className="buttons">
            <div className="step-button">
                <button onClick={this.validateInformation} className="button-continue" type="submit">Continue</button>
            </div>
            <div className="step-button">
                <button onClick={decrement} className="button-back" type="submit">Go back</button>
            </div>
        </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Confirm;
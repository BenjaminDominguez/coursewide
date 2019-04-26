import React, { Component } from 'react';
import EmailPassword from './EmailPassword';
import FinalDetails from './FinalDetails';
import Confirm from './Confirm';
import { register } from '../../actions/authActions';
import { connect } from 'react-redux';
import Validator from './Validator';
import FlashedMessages from './FlashedMessages';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.validator = new Validator();
    this.passwordMsg = 'Password must be at least 10 characters long. Go back and change.'
    this.state = {
      step: 1,
      email: '',
      password: '',
      fullName: '',
      country: '',

      showPassword: false,

      flashedMessages: []
    }
  }

  validateAndIncrement = (e) => {
    e.preventDefault();
    const { email, password, fullName, country } = this.state;
    const values = [email, fullName, country]

    let flashedMessages = [];

    const validatePassword = this.validator.validateLength(password, 10);
    if (!validatePassword) {
      flashedMessages.push(<FlashedMessages flashClass="red" text={this.passwordMsg} />) 
    } else {
      values.forEach(value => {
        if (!this.validator.validateLength(value, 0)){
          flashedMessages.push(<FlashedMessages flashClass="red" text="Please fill in all fields" />)
        }
      })
    }

    if (flashedMessages.length === 0){
      this.incrementStep();
    } else {
      this.setState({flashedMessages: flashedMessages})
    }
  }


  incrementStep = () =>{
    const step = this.state.step
    this.setState({step: step+1})
  }

  decrementStep = (e) =>{
    e.preventDefault()
    const step = this.state.step
    this.setState({flashedMessages: []})
    this.setState({step: step - 1})
  }

  handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value})
  }

  handlePasswordToggle = () => {
    this.setState({showPassword: !this.state.showPassword})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: this.state.email,
      password: this.state.password,
      fullName: this.state.fullName,
      country: this.state.country
    }
    this.props.handleRegister(userDetails);
  }

  render() {
    switch(this.state.step){
      case 1:
        return <EmailPassword 
        email={this.state.email}
        password={this.state.password} 
        showPassword={this.state.showPassword} 
        handlePasswordToggle={this.handlePasswordToggle} 
        handleChange={this.handleChange} 
        increment={this.incrementStep}
        />
      case 2:
        return <FinalDetails 
        state={this.state} 
        handleChange={this.handleChange} 
        increment={this.incrementStep} 
        decrement={this.decrementStep} />
      case 3:
        return <Confirm 
        state={{email: this.state.email, fullName: this.state.fullName, country: this.state.country}}
        increment={this.validateAndIncrement} 
        decrement={this.decrementStep}
        flashedMessages={this.state.flashedMessages} />
      case 4:
        //Register and log the user in
        this.props.handleRegister({
          email: this.state.email,
          password: this.state.password
        })

        return <Redirect to="/" />
    }
  }
}

const mapDispatchToProps = dispatch => ({
  handleRegister: (userDetails) => dispatch(register(userDetails))
})

export default connect(null, mapDispatchToProps)(Register);
import React, { Component } from 'react';
import EmailPassword from './EmailPassword';
import FinalDetails from './FinalDetails';
import Confirm from './Confirm';
import Validator from './Validator';
import FlashedMessages from './FlashedMessages';
import { register } from '../../actions/authActions';
import { connect } from 'react-redux';
import { authErrors } from '../../reducers';

class Register extends Component {
  constructor() {
    super();

    //register instance of validation class, will be more
    //useful later on when password and email validation are added
    this.validator = new Validator();
    this.state = {
      step: 1,
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      country: '',

      showPassword: false,

      flashedMessages: []
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

  handleRegister = (e) => {
    e.preventDefault();

    //Deconstruct all relevant fields
    const { email, password, firstName, lastName, country } = this.state;
    const valuesToValidate = [email, password, firstName, lastName, country]

    let flashedMessages = []

    //Validate each, eventually we are going to move to email validation and password validation
    valuesToValidate.forEach(value => {
      if(!this.validator.validateLength(value, 0)){
        flashedMessages.push(<FlashedMessages flashClass="red small" text="Please fill in all fields" />)
      }
    })

    // If no validation errors, procede to register
    if (flashedMessages.length === 0){

      const userDetails = {
        email: email,
        password: password, 
        first: firstName,
        last: lastName,
        location: country,
        isStudent: true 
      }
      this.props.handleRegister(userDetails);
    } else {
      //Just send one flashed message
      this.setState({flashedMessages: flashedMessages[0]})
    }
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
        message={this.props.location.state ? this.props.location.state.message : null}
        />
      case 2:
        return <FinalDetails 
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        country={this.state.country}
        handleChange={this.handleChange} 
        increment={this.incrementStep} 
        decrement={this.decrementStep} />
      case 3:
        return <Confirm 
        state={{email: this.state.email, first: this.state.firstName, last: this.state.lastName, country: this.state.country}}
        increment={this.validateAndIncrement} 
        decrement={this.decrementStep}
        handleRegister={this.handleRegister}
        flashedMessages={this.state.flashedMessages} />
    }
  }
}


const mapStateToProps = state => ({
  error: authErrors(state)
})

const mapDispatchToProps = dispatch => ({
  handleRegister: userDetails => dispatch(register(userDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
import React, { Component } from 'react';
import EmailPassword from './EmailPassword';
import FinalDetails from './FinalDetails';
import Confirm from './Confirm';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import { register } from '../../actions/authActions';
import { connect } from 'react-redux';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      email: null,
      password: null,
      fullName: null,
      country: null,

      showPassword: false,

      validation: {
        emailValid: false,
        passwordValid: false,
        fullNameValid: false,
        countryValid: false
      }
    }
  }

  incrementStep = (e) =>{
    e.preventDefault()
    const step = this.state.step
    this.setState({step: step + 1})
  }

  decrementStep = (e) =>{
    e.preventDefault()
    const step = this.state.step
    this.setState({step: step - 1})
  }

  handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value})
  }

  handlePassword = () => {
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
        return <EmailPassword state={this.state} showPassword={this.state.showPassword} handlePassword={this.handlePassword} handleChange={this.handleChange} increment={this.incrementStep}/>
      case 2:
        return <FinalDetails state={this.state} handleChange={this.handleChange} increment={this.incrementStep} decrement={this.decrementStep} />
      case 3:
        return <Confirm state={this.state} increment={this.incrementStep} decrement={this.decrementStep} />
      case 4:
        this.handleSubmit();
        return (
          <div>
            <Topbar/>
            <Navbar/>
            <div className="container">
              <h1>Succesfully registered!</h1>
            </div>
          </div>
        )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  handleRegister: (userDetails) => dispatch(register(userDetails))
})

export default connect(null, mapDispatchToProps)(Register);
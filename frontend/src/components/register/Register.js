import React, { Component } from 'react';
import EmailPassword from './EmailPassword';
import FinalDetails from './FinalDetails';
import Confirm from './Confirm';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';

class Register extends Component {
  constructor() {
    super();
    this.apiPostURL = 'http://localhost:8000/api/users/'
    this.state = {
      step: 1,
      email: null,
      username: null,
      password: null,
      fullName: null,
      language: null,
      country: null
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


  render() {
    switch(this.state.step){
      case 1:
        return <EmailPassword state={this.state} handleChange={this.handleChange} increment={this.incrementStep}/>
      case 2:
        return <FinalDetails state={this.state} handleChange={this.handleChange} increment={this.incrementStep} decrement={this.decrementStep} />
      case 3:
        return <Confirm state={this.state} increment={this.incrementStep} decrement={this.decrementStep} />
      case 4:
        const { email, password, language, country } = this.state;
        const data = {
            email: email,
            password: password,
            language: language,
            country: country,
            is_student: true
          }
        fetch(this.apiPostURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
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

export default Register;
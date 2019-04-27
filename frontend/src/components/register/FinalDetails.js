import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';

class FinalDetails extends Component {
  render() {
    const { increment, decrement, handleChange, firstName, lastName, country } = this.props;
    return (
        <div>
            <Header />
            <div className="form-container">
                <form className="register-form">
                    <div className="form-heading-bg">
                    <h1 className="form-heading"> Sign up for coursewide. </h1>
                    <p className="form-subheading">Enter a few more details and then confirm.</p>
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} name="firstName" value={firstName} className="form-input" type="text" placeholder="First Name" />
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} name="lastName" value={lastName} className="form-input" type="text" placeholder="Last Name" />
                    </div>
                    <div className="form-control">
                        <input onChange={handleChange} name="country" value={country} className="form-input" type="text" placeholder="What country do you currently live in?" />
                    </div>
                    <div className="buttons">
                        <div className="step-button">
                            <button onClick={increment} className="button-continue" type="submit">Continue</button>
                        </div>
                        <div className="step-button">
                            <button onClick={decrement} className="button-back" type="submit">Go back</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
  }
}


export default FinalDetails;
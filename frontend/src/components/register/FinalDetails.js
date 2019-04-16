import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';

class FinalDetails extends Component {
  render() {
    const { increment, decrement, handleChange, state } = this.props;
    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="container form-container">
                <form className="register-form">
                    <h1 className="form-heading"> Register </h1>
                    <div className="form-control">
                        <input name="fullName" onChange={handleChange} value={state.fullName} className="form-input" type="text" placeholder="Full Name" />
                    </div>
                    <div className="form-control">
                        <input name="language" onChange={handleChange} value={state.language} className="form-input" type="text" placeholder="What language do you speak?" />
                    </div>
                    <div className="form-control">
                        <input name="country" onChange={handleChange} value={state.country} className="form-input" type="text" placeholder="What country do you currently live in?" />
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
        </div>
    )
  }
}


export default FinalDetails;
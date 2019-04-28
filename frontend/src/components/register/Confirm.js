import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';
import { authErrors, isAuthenticated } from '../../reducers';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/authActions';


class Confirm extends Component {

    componentDidMount = () => this.props.clearErrors();

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
        }
    )

//new on click event

  render() {

    const { decrement, handleRegister, error, flashedMessages } = this.props;

    switch(this.props.isAuthenticated){
        case false:
            return (
            <div>
                <Header />
                    <div className="form-container">
                        <div className="confirm-register">
                                { error ? error.msg ? <span className="flashed-message red small"> {error.msg}</span> : null : null }
                                { flashedMessages ? flashedMessages : null}
                                {this.formattedState() }
                            <div className="buttons">
                                <div className="step-button">
                                    <button onClick={ handleRegister } className="button-continue last-step" type="submit">Register</button>
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
        case true:
            return <Redirect to='/' />
    }
  }
}

const mapStateToProps = state => ({
    error: authErrors(state),
    isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
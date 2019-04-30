import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import Header from '../layout/header/Header';

class Payment extends Component {

  render() {
    return (
      <div>
          <Header />
          <Elements>
            <CheckoutForm />
          </Elements>
      </div>
    )
  }
}

export default connect(null)(Payment);

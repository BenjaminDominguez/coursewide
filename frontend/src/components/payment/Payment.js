import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';
import { courseID } from '../../reducers';
import { Redirect } from 'react-router-dom';

class Payment extends Component {

  constructor(props){
    super(props);
    this.state = {
      paymentSuccess: false
    }
  }

  togglePaymentSuccess = () => {
    this.setState({paymentSuccess: true})
  }

  render() {

    switch(this.state.paymentSuccess){
      case false:
      default:
        return (
          <div>
              <Header />
              <Elements>
                <CheckoutForm togglePaymentSuccess={this.togglePaymentSuccess} />
              </Elements>
              <Footer />
          </div>
        )
      case true:
          return (
            <Redirect to={`/courses/${this.props.courseID}`} />
          )
      }
    }
  }

const mapStateToProps = state => ({
  courseID: courseID(state)
})

export default connect(mapStateToProps)(Payment);

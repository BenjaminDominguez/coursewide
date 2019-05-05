import React, { Component } from 'react'; 
import { injectStripe, CardElement } from 'react-stripe-elements';
import { fullName, courseName, courseDescription, email, userID, courseID } from '../../reducers';
import { connect } from 'react-redux';
import { updateUserDetails } from '../../actions/authActions';

class CheckoutForm extends Component {

  constructor(props){
    super(props);
    const { fullName } = this.props;
    this.state = {
      complete: false,
      name: fullName,
      cardErrors: ''
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    
    this.props.stripe.createToken({
      type: 'card',
      email: this.props.email,
      name: this.state.name
    })
      .then(tokenData => {
        fetch('/api/payments/charge', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            paymentDetails: {
              userID: this.props.userID,
              courseID: this.props.courseID
            },  
            stripeToken: tokenData
          })
        })
          .then((res) => {
            if (res.ok){
              this.props.togglePaymentSuccess();
              this.props.updateUserDetails(this.props.userID)
            }
          })
            .then((data) => console.log(data))
              .catch(err => console.log(err))
            
      })
        .catch((err) => console.log(err))
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  render() {

    const { courseName, courseDescription } = this.props;

    return (
      <form className="stripe-form" onSubmit={this.handleSubmit}>
        <h1 className="stripe-form-title"> Complete Purchase </h1>
        <div className="course-info">
          <img className="course-image" src="https://www.webdevelopersnotes.com/wp-content/uploads/free-html-course-physical-tags.png" />
          <div className="course-details">
            <div className="actual-details">
              <h1> { courseName } </h1>
              <p> { courseDescription } </p>
            </div>
            <div className="total-details">
              <p className="total"> Total: $9.99</p>
            </div>
          </div>
        </div>
        <div id="line"></div>
        <div className="stripe-form-inputs">
        <input name="name" type="text" placeholder="Name on card" className="StripeElement" onChange={this.handleChange} value={this.state.name} required />
        <CardElement />
        <p className="a-few-seconds"> It may take up to a few seconds to process your order. </p>
        <button className="stripe-form-button"> <i style={{marginRight: '10px'}}className="fas fa-lock"></i> Confirm and pay </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  fullName: fullName(state),
  courseName: courseName(state),
  courseDescription: courseDescription(state),
  email: email(state),
  courseID: courseID(state),
  userID: userID(state)
})

export default connect(mapStateToProps, { updateUserDetails })(injectStripe(CheckoutForm))

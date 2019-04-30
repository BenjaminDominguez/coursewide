import React, { Component } from 'react'; 
import { injectStripe, CardElement } from 'react-stripe-elements';
import { fullName, courseName, courseDescription } from '../../reducers';
import { connect } from 'react-redux';

class CheckoutForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      complete: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { token, errors } = await this.props.stripe.createToken({name: this.props.fullName})
    const response = await fetch('/charge', {
      method: 'POST',
      headers: {'Content-type': 'text-plain'},
      body: token.id
    })

    if (response.ok) {
      this.setState({complete: true})
    }
  }

  render() {

    const { courseName, courseDescription } = this.props;

    return (
      <form className="stripe-form" onSubmit={this.submit}>
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
        <label for="name-on-card">Name on card</label>
        <input name="name-on-card" type="text" className="StripeElement" value={this.props.fullName} />
        <CardElement />
        <button className="stripe-form-button"> Confirm purchase </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  fullName: fullName(state),
  courseName: courseName(state),
  courseDescription: courseDescription(state)
})

export default connect(mapStateToProps)(injectStripe(CheckoutForm))

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { courseName, courseDescription, instructorName } from '../../reducers';


class CourseDetails extends Component {

  handlePaymentRedirect = () => this.props.history.push('/payment');

  render() {

    const { courseName, courseDescription, instructorName } = this.props;

    return (
      <div id="course-details" className="course-container">
        <img className="course-image" src="https://www.webdevelopersnotes.com/wp-content/uploads/free-html-course-physical-tags.png" />
          <div id="course-info">
            <h1 className="course-title"> { courseName } </h1>
            <p className="course-description"> { courseDescription } </p>
            <p className="course-instructor"><i className="fas fa-user-alt"></i> {" "}Taught by { instructorName }</p>
            <span className="course-location"><i className="fas fa-globe-americas"></i>{" "}<p>Belize</p></span>
          <div className="course-payment">
            <div className="course-price">$9.99</div>
            <div onClick={this.handlePaymentRedirect} className="course-purchase-now">Buy Now <i style={{ marginLeft: '5px'}}className="fas fa-arrow-right"></i></div>
          </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courseName: courseName(state),
  courseDescription: courseDescription(state),
  instructorName: instructorName(state)
})

export default withRouter(connect(mapStateToProps)(CourseDetails));
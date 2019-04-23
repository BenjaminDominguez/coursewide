import React, { Component } from 'react';
import CourseImage from './CourseImage';
import { connect } from 'react-redux';

class CourseDetails extends Component {

  render() {

    const { courseName, courseDescription, instructorName } = this.props;

    return (
      <div className="course-container">
        <CourseImage />
          <div id="course-info">
            <h1 className="course-title"> { courseName } </h1>
            <p className="course-description"> { courseDescription } </p>
            <p className="course-instructor"><i className="fas fa-user-alt"></i> {" "}Taught by { instructorName }</p>
            <span className="course-location"><i className="fas fa-globe-americas"></i>{" "}<p>Belize</p></span>
            <div className="language"><p>Spanish</p></div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courseName: state.course.courseName,
  courseDescription: state.course.courseDescription,
  instructorName: state.course.instructorName
})

export default connect(mapStateToProps)(CourseDetails);
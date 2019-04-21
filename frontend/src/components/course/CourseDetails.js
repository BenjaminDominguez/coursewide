import React, { Component } from 'react';
import CourseImage from './CourseImage';

class CourseDetails extends Component {

  render() {

    const { name, description } = this.props;

    return (
      <div className="course-container">
        <CourseImage />
          <div id="course-info">
            <h1 className="course-title"> { name } </h1>
            <p className="course-description"> { description } </p>
            <p className="course-instructor"><i className="fas fa-user-alt"></i> {" "}Taught by Ben Dominguez</p>
            <span className="course-location"><i className="fas fa-globe-americas"></i>{" "}<p>Belize</p></span>
            <div className="language"><p>Spanish</p></div>
          </div>
      </div>
    )
  }
}

export default CourseDetails;
import React, { Component } from 'react'

class CourseDetails extends Component {
  render() {

    const { info } = this.props;
    return (
      <div className="course-info">
        <h1> {info.name} </h1>
        <p> {info.description} </p>
        <div className="language"><p>Spanish</p></div>
      </div>
    )
  }
}

export default CourseDetails;
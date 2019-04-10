import React, { Component } from 'react'

class CourseBox extends Component {
  render() {
    return (
      <div className="courseBox">
        <p className="courseName">{this.props.name}</p>
        <p className="taughtBy">Taught by Ben Dominguez</p>
        <button className="takeCourse">Take Course</button>
      </div>
    )
  }
}

export default CourseBox;

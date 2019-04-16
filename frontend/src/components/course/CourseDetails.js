import React, { Component } from 'react';

class CourseDetails extends Component {

  render() {

    const { name, description } = this.props;

    return (
      <div id="course-info" className="course-container">

        <p onClick={this.props.handleToggle} className="course-edit">
        { this.props.editState ? 'Stop working on Course' : 'Work on Course'}
        </p>
        <h1> { name } </h1>
        <p> { description } </p>
        <div className="language"><p>Spanish</p></div>
        </div>
    )
  }
}

export default CourseDetails;
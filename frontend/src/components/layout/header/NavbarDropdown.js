import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coursesTaking } from '../../../reducers'; 
import { withRouter } from 'react-router-dom';

class TopbarDropdown extends Component {

  handleClick = (courseID) => {
    this.props.history.push(`/courses/${courseID}`)
    window.location.reload();
  }

  render() {
    let content;
    if (this.props.coursesTaking) {
      content = this.props.coursesTaking.map(course => {
        return (<div onClick={() => this.handleClick(course.courseID)} className="drop-down-item"> {course.courseName} </div>)
      })
    } else {
      content = (<div onClick={() => this.props.history.push('/courses')}className="drop-down-item"> <p>No courses yet. Browse courses and get started!</p> </div>)
    }
    return (
      <div className="drop-down">
      <h1 className="drop-down-heading"> Your courses </h1>
      { content }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coursesTaking: coursesTaking(state)
})

export default connect(mapStateToProps)(withRouter(TopbarDropdown));
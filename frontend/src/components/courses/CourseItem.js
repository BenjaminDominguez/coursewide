import React, { Component } from 'react'

class CourseItem extends Component {
  render() {
    return (
      <div className="courseItem">
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default CourseItem;
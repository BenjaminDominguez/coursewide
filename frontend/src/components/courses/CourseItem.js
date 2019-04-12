import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseItem extends Component {
  render() {
    const { id, name, description } = this.props.info;

    return (
      <div className="courseItem">
        <h1>{name}</h1>
        <p>{description}</p>
        <Link to={`/course/${id}`}>Link to the course</Link>

      </div>
    )
  }
}

export default CourseItem;
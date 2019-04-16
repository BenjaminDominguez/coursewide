import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CourseItem extends Component {

  handleClick = () => {
    const { redirectPath } = this.props;
    this.props.history.push(redirectPath);
  }

  render() {
    const { name, description } = this.props.info;

    return (
      <div className="courseItem" onClick={this.handleClick}>
        <h1 className="course-title">{name}</h1>
        <p className="course-description">{description}</p>
        <p className="course-instructor">Taught by Ben Dominguez</p>
        <p className="course-lessons">140 lessons</p>
        <button className="course-language">Spanish</button>
        <button className="course-language">Korean</button>
      </div>
    )
  }
}

export default withRouter(CourseItem);
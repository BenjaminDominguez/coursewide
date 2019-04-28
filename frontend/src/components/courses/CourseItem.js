import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CourseItem extends Component {

  handleClick = () => {
    const { redirectPath } = this.props;
    this.props.history.push(redirectPath);
  }

  render() {
    const { name, description } = this.props.info;
    const { instructor, numModules } = this.props;


    return (
      <div className="courseItem" onClick={this.handleClick}>
        <h1 className="course-title">{name}</h1>
        <p className="course-description">{description}</p>
        <p className="course-instructor">Taught by { instructor }</p>
        <p className="course-lessons">{ numModules } modules</p>
      </div>
    )
  }
}

export default withRouter(CourseItem);
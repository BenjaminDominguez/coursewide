import React, { Component } from 'react';
import ModuleItem from './ModuleItem';

class CourseModules extends Component {

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

  render() {

    return (
    <div class="course-container">
      <div class="modules">
          { this.props.modules.map((module, index) => {
            return <ModuleItem key = { index } module = { module } />
          })}
      </div>
    </div>
    )
  }
}

export default CourseModules;

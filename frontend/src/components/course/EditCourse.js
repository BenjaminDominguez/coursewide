import React, { Component } from 'react';
import AddNewModule from './AddNewModule';

class EditCourse extends Component {
  
  render() {

    return (
      <div class="course-container">
        <h3> Edit Modules </h3>
        <AddNewModule handleEditChange={this.props.handleEditChange} handleSubmit={this.props.handleSubmit}/>
        <h3>Current Modules </h3>
        {
          this.props.modules.map((module) => {
            return (<p>{module.name}</p>)
          })
        }
      </div>
    )
  }
}

export default EditCourse;
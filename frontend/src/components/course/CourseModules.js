import React, { Component } from 'react';
import ModuleItem from './ModuleItem';
import AddNewModule from './AddNewModule';

class CourseModules extends Component {

    constructor() {
        super();
        this.APIURL = 'http://localhost:8000/api/courses'
        this.state = {
            currentModules: [],
            moduleName: '',
            moduleDescription: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addEditContent = () => {
      if(this.props.editState){
        return (
          <AddNewModule 
          moduleName={this.state.moduleName} 
          moduleDescription={this.state.moduleDescription} 
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          />
        )
      }
    }

  render() {
    return (
    <div class="course-container">
        <div class="modules">
        <h1> Course Modules </h1>
          {
            this.addEditContent()
          }
         {
          this.props.modules.map((module) => {
            return <ModuleItem moduleName={module} /> 
          })
         }
         

        </div> 
      
    </div>
    )
  }
}

export default CourseModules;

import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import CourseDetails from './CourseDetails';
import EditCourse from './EditCourse';
import CourseModules from './CourseModules';

/*
Course will not be included in the redux store.
*/

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courseContent: {
        courseName: '',
        courseDescription: '',
        instructorName: '',
        modules: []
      },
      editContent: {
        toggleEdit: false,
        newModuleName: ''
      }
    }
  };

  //Run as soon as the component mounts
  componentDidMount = () => {
    const { id } = this.props.match.params;

    const APIURL = 'http://localhost:8000/api/courses';

    fetch(`${APIURL}/${id}`)
      .then((res) => res.json())
      .then((course) => {
        let courseContent = {...this.state.courseContent}
        courseContent.courseName = course.name;
        courseContent.courseDescription = course.description;
        courseContent.modules = course.modules;
        
        this.setState({courseContent})
      })
    }

  handleEditChange = (e) => {
    const editContent = {...this.state.editContent}
    editContent.newModuleName = e.target.value
    this.setState({editContent})
  }

  handleToggle = (e) => {
    e.preventDefault();
    let editContent = { ...this.state.editContent }
    editContent.toggleEdit = !editContent.toggleEdit
    this.setState({editContent})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { id } = this.props.match.params;

    let APIURL = `http://localhost:8000/api/courses/${id}/add_module/`
    fetch(APIURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: this.state.editContent.newModuleName,
            order: this.state.courseContent.modules.length + 1
          }
        )
    })
    .then((res) => res.json())
    .then((module) => console.log(module))
  }


  render() {
    // Save topbar and Navbar as header for reuse
    const header = (
    <div>
      
      <Topbar />
      <Navbar />
      <CourseDetails 
      editState={this.state.editContent.toggleEdit} 
      handleToggle={this.handleToggle}
      name={ this.state.courseContent.courseName } 
      description={ this.state.courseContent.courseDescription }
      />
    </div>
    )

    switch(this.state.editContent.toggleEdit){
      case(false):  
        return (
          <div>
            { header }
            <CourseModules modules={ this.state.courseContent.modules } />
          </div>
      )
      case(true):
          return (
            <div>
              { header }
              <EditCourse handleSubmit={this.handleSubmit}
              handleEditChange={this.handleEditChange}
              modules={ this.state.courseContent.modules } 
              />
            </div>
          )
        }
    }
}

export default Course;
import React, { Component } from 'react';
import Header from '../layout/header/Header';
import CourseDetails from './CourseDetails';
import EditCourse from './EditCourse';
import CourseModules from './CourseModules';
import { getCourseInfo } from '../../actions/courseActions';
import { connect } from 'react-redux';
import CourseBio from './CourseBio';
import CourseNav from './CourseNav';

/*
Course will not be included in the redux store.
*/

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editContent: {
        toggleEdit: false,
        newModuleName: ''
      },
      showModules: true
    }
  };

  //Run as soon as the component mounts
  componentDidMount = () => {
    console.log('Getting course info')  
    this.props.getCourseInfo(this.props.match.params.id)
  
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

  handleNav = (location) => {
    location === 'info' ? 
    this.setState({showModules: false}) 
    : this.setState({showModules: true})
  }


  render() {
    // Save topbar and Navbar as header for reuse
    const header = (
    <div>
      <Header />
      <CourseDetails 
      editState={this.state.editContent.toggleEdit} 
      handleToggle={this.handleToggle}
      />
      <CourseNav infoActive={!this.state.showModules} modulesActive={this.state.showModules} handleNav={this.handleNav} />
    </div>
    )

    switch(this.state.showModules){
      case(true):  
        return (
          <div>
            { header }
            <CourseModules />
          </div>
      )
      case(false):
          return (
            <div>
              { header }
              <CourseBio />
            </div>
          )
        }
    }
}


export default connect(null, { getCourseInfo })(Course);
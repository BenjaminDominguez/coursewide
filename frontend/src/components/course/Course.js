import React, { Component } from 'react';
import Header from '../layout/header/Header';
import CourseDetails from './CourseDetails';
import CourseModules from './CourseModules';
import { getCourseInfo } from '../../actions/courseActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseBio from './CourseBio';
import CourseNav from './CourseNav';
import { isAuthenticated, coursesTaking, courseID } from '../../reducers';

/*
Course will not be included in the redux store.
*/

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userEnrolled: false,
      showModules: true
    }
  };

  //Run as soon as the component mounts
  componentDidMount = () => {
    const { getCourseInfo } = this.props;
    const { id } = this.props.match.params;
    getCourseInfo(id)
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
      handleToggle={this.handleToggle}
      enrolled={this.props.enrolled}
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

const mapStateToProps = state => {
  let isEnrolled = false;
  if (isAuthenticated(state)) {
    const courseIDs = coursesTaking(state).map(course => {
      return course.courseID
    })
    isEnrolled = courseIDs.includes(courseID(state));
  }

  return ({
    isAuthenticated: isAuthenticated(state),
    coursesTaking: coursesTaking(state),
    enrolled: isEnrolled
  })
}

export default connect(mapStateToProps, { getCourseInfo })(Course);
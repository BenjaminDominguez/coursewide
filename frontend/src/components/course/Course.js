import React, { Component } from 'react';
import Header from '../layout/header/Header';
import CourseDetails from './CourseDetails';
import CourseModules from './CourseModules';
import { getCourseInfo } from '../../actions/courseActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseBio from './CourseBio';
import CourseNav from './CourseNav';
import { isAuthenticated, coursesTaking, isEnrolled, courseID } from '../../reducers';
import Footer from '../layout/Footer';

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

  handleNav = (location) => {
    location === 'info' ? 
    this.setState({showModules: false}) 
    : this.setState({showModules: true})

    window.scrollTo(0, 0)
  }


  render() {
    // Save topbar and Navbar as header for reuse
    const header = (
    <div>
      <Header />
      <CourseDetails 
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
            <Footer />
          </div>
      )
      case(false):
          return (
            <div>
              { header }
              <CourseBio />
              <Footer />
            </div>
          )
        }
    }
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  coursesTaking: coursesTaking(state),
  isEnrolled: isEnrolled(state)
})


export default connect(mapStateToProps, { getCourseInfo })(Course);
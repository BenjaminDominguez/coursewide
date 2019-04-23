import React, { Component } from 'react';
import ModuleItem from './ModuleItem';
import { connect } from 'react-redux';

class CourseModules extends Component {

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

  render() {

    const { courseID } = this.props;
    const baseURL = `${courseID}/modules`

    return (
    <div class="course-container">
      <div class="modules">
          { this.props.modules.map((module, index) => {
            return <ModuleItem 
            key = { index } 
            module = { module } 
            moduleURL={ baseURL + `/${module.order}` }
            modules={ this.props.modules } />
          })}
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  modules: state.course.modules,
  courseID: state.course.courseID
})

export default connect(mapStateToProps)(CourseModules);

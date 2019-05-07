import React, { Component } from 'react';
import ModuleItem from './ModuleItem';
import { isEnrolled, modules, courseID } from '../../reducers';
import { connect } from 'react-redux';

class CourseModules extends Component {

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

  render() {

    return (
    <div class="course-container">
      <div class="modules">
          {this.props.isEnrolled ? null : (<p className="buy-now-p">Buy this course now to access course modules.</p>)}
          { this.props.modules }
          { this.props.extraModules ? <p className="buy-now-p"> {this.props.extraModules.length} more modules available. Purchase course now to access all of the them! </p> : null }
      </div>
    </div>
    )
  }
}

/* Need isEnrolled, modules, and courseID */

const mapStateToProps = state => {
  const id = courseID(state);
  const moduleItems = [];
  const extraModuleItems = [];
  const baseURL = `${id}/modules`

  modules(state).forEach((module, index) => {
    const moduleItem = (<ModuleItem 
      key={ index }
      module = { module }
      moduleURL = {baseURL + `/${module.order}`}
      />)

      if (index < 5) {
        moduleItems.push(moduleItem)
      } else {
        extraModuleItems.push(moduleItem)
      }
  })

  return {
    modules: moduleItems,
    extraModules: extraModuleItems,
    courseID: courseID(state),
    isEnrolled: isEnrolled(state)
  }

}

export default connect(mapStateToProps)(CourseModules);

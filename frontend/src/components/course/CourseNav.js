import React, { Component } from 'react'

class CourseNav extends Component {
  render() {
    const { handleNav, infoActive, modulesActive } = this.props;
    return (
        <ul className="course-navigation"> 
            <li className={modulesActive ? "active" : null} onClick={() => handleNav('modules')}> Modules </li>
            <li className={infoActive ? "active" : null} onClick={() => handleNav('info')}> Course Information </li>
        </ul>
    )
  }
}

export default CourseNav;
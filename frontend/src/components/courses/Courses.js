import React, { Component } from 'react';
import CourseItem from './CourseItem';
import Search from './Search';
import Navbar from '../layout/Navbar';
import Topbar from '../layout/Topbar';
import { Redirect } from 'react-router-dom';


class Courses extends Component {
    constructor() {
        super();
        this.courseURL = '/api/courses'
        this.state = {
            courses: [],
            query: ''
        }
    }

    handleSearch = e => {
      e.preventDefault();
      this.setState({query: e.target.value})
    }


    componentDidMount() {
        fetch(this.courseURL)
            .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    let courses = data.map((course) => {
                        const { course_info, modules } = course;
                        return <CourseItem 
                        key={course_info.id} 
                        info={course_info} 
                        redirectPath={`/courses/${course_info.id}`}
                        instructor={course_info.teacher.name}
                        numModules={ modules.length }
                        />
                    })
                    this.setState({courses: courses})
                    console.log(this.state.courses)
              })
            }

  render() {
    return (
    <div>
    <Topbar />
    <Navbar />
      <div className="courses-bg-overlay">
      <div className="courses-container">
        <h1 className="courses-heading"> Our available courses </h1>
        <Search handleSearch={this.handleSearch} />
          <div className="course-items">
          { this.state.courses }
          </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Courses;

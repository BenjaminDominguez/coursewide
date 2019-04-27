import React, { Component } from 'react';
import CourseItem from './CourseItem';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';


class Courses extends Component {
    constructor() {
        super();
        this.courseURL = '/api/courses'
        this.state = {
            courses: [],
            query: ''
        }
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
    <Header />
      <div className="courses-bg-overlay">
      <div className="courses-container">
        <h1 className="courses-heading"> Our available courses ({this.state.courses.length}) </h1>
          <div className="course-items">
          { this.state.courses }
          </div>
      </div>
      </div>
    <Footer/>
    </div>
    )
  }
}

export default Courses;

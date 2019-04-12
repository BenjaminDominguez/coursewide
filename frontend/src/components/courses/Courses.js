import React, { Component } from 'react';
import CourseItem from './CourseItem';
import Search from './Search';
import Navbar from '../layout/Navbar';
import Topbar from '../layout/Topbar';


class Courses extends Component {
    constructor() {
        super();
        this.courseURL = 'http://localhost:8000/api/courses'
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        fetch(this.courseURL)
            .then((res) => res.json())
                .then((data) => {
                    let courses = data.map((course) => {
                        return <CourseItem key={course.id} info={course} />
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
      <div className="container">
        <h1> Available Courses </h1>
        { this.state.courses }
      </div>
    </div>
    )
  }
}

export default Courses;

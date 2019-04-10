import React, { Component } from 'react'
import CourseBox from './CourseBox';

class CourseCarousel extends Component {
    constructor() {
        super();
        this.courseURL = 'http://localhost:8000/api/courses/most_recent'
        this.state = {
            courses: []
        }

    }

    componentDidMount() {
        fetch(this.courseURL)
            .then((res) => res.json())
            .then((data) => {
                let courses = data.map((course) => { 
                    return (
                    <CourseBox key={course.id} name={course.name}/>
                    )
            })
                this.setState({courses: courses})
                console.log(courses)
            })
        }

    render() { 
        return (
            <div>
            <h1 className = "courseCarouselHeader" > Recent Courses Available </h1>
            <div className="courseCarousel">
                <div className="courseCarouselPrevArrow"></div>
                {this.state.courses}
                <div className="courseCarouselNextArrow"></div>
            </div>
            </div>
            )
        }
}

export default CourseCarousel;
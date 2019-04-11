import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import CourseDetails from './CourseDetails';

class Course extends Component {
  constructor() {
    super();
    this.APIURL = 'http://localhost:8000/api/courses'
    this.state = {
      courseInfo: '',
      toggleEdit: false
    }

  }

  componentDidMount() {

    //get the id from the params
    const { id } = this.props.match.params;
    fetch(`${this.APIURL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({courseInfo: <CourseDetails key={data.id} info={data} />})
      })
  }

  render() {
    return (
      <div>
        <Topbar />
        <Navbar />
        <div>
          { this.state.courseInfo }
        </div>
      </div>
    )
  }
}

export default Course;
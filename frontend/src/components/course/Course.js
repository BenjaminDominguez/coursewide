import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import CourseDetails from './CourseDetails';
import CourseModules from './CourseModules';

class Course extends Component {
  constructor() {
    super();
    this.APIURL = 'http://localhost:8000/api/courses'
    this.state = {
      newModuleName: '',
      courseID: null,
      modules: [],
      courseInfo: '',
      toggleEdit: false
    }

  }

  handleChange = (e) => {
    this.setState({
      newModuleName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${this.APIURL}/${this.state.courseID}/add_module/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newModuleName,
        order: this.state.modules.length + 1
      })
    }
    )
    .then((res) => res.json())
    .then((data) => {
      this.setState({modules: this.state.modules.concat(data)})
    })
  }

  handleToggleEdit = (e) => {
    e.preventDefault();
    this.setState({toggleEdit: !this.state.toggleEdit})
  }

  componentDidMount() {

    //get the id from the params
    const { id } = this.props.match.params;
    this.setState({courseID: id})
    fetch(`${this.APIURL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({courseInfo: data})
        data.modules.map((module) => {
          this.setState({modules: this.state.modules.concat(module)})
        })
      })
  }

  render() {
    return (
    <div>
      <Topbar />
      <Navbar />
      <CourseDetails info={this.state.courseInfo} handleToggleEdit={this.handleToggleEdit}/>
      <CourseModules 
      editState={this.state.toggleEdit} 
      modules={this.state.modules}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    </div>
    )
  }
}

export default Course;
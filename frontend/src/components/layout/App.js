import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import CourseCarousel from '../carousel/CourseCarousel';
import Showcase from './Showcase';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Navbar />
        <Showcase />
        <CourseCarousel />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Topbar from '../components/layout/Topbar';
import CourseCarousel from '../components/carousel/CourseCarousel';
import Showcase from '../components/layout/Showcase';


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


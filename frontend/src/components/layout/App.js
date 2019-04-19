import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import CoursesAvail from './landing/CoursesAvail';
import Showcase from './Showcase';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Navbar />
        <Showcase />
        <CoursesAvail />
      </div>
    );
  }
}

export default App;


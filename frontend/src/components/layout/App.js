import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Showcase from './Showcase';
import Footer from './landing/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Navbar />
        <Showcase />
        <Footer />
      </div>
    );
  }
}

export default App;


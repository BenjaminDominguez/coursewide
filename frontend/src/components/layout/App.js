import React, { Component } from 'react';
import Header from './header/Header';
import Showcase from './Showcase';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase />
        <Footer />
      </div>
    );
  }
}

export default App;


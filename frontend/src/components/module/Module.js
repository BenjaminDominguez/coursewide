import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Topbar from '../layout/Topbar';

class Module extends Component {

  constructor(props) {
    super(props);
    this.id = this.props.match.params.order
    this.state = {
    }
  }

  componentDidMount = () => {
    console.log(this.state.id)
  }

  render() {
    return (
      <div>
        <Topbar />
        <Navbar /> 
        Welcome to module { this.id }
      </div>
    )
  }
}

export default Module;

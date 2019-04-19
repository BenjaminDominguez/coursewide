import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Topbar from '../layout/Topbar';
import ModuleList from './ModuleList';
import ReactPlayer from 'react-player';

class Module extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: this.props.match.params.order
    }
  }

  handleModuleRedirect = (url, order) => {
    this.props.history.push(url)
    this.setState({order})
  }

  render() {

    const header = (
      <React.Fragment>
        <Topbar />
        <Navbar />
      </React.Fragment>
    )

    return (
      <div>
          { header }
        <div className="moduleContainer">
          { <ModuleList order={this.state.order} handleModuleRedirect={this.handleModuleRedirect} courseID={this.props.match.params.id}/> }
          <div className="moduleVideoContainer">
            <ReactPlayer
              width="900px"
              height="500px"
              url='https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s'
              playing={true}
              controls={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Module;

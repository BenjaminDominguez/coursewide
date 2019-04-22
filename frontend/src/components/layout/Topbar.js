import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fullName, isAuthenticated } from '../../reducers';
import TopbarDropdown from './TopbarDropdown';

class Topbar extends Component {

  constructor() {
    super();
    this.state = {
      showCourses: false
    }
  }

  handleClick = () => {
    this.setState({showCourses: !this.state.showCourses})
  }

  render() {
    return (
      <nav className="topbar">
        { this.props.isAuthenticated ? (
          <div className="username"> 
          <p onClick={this.handleClick} >{ this.props.fullName }
          { this.state.showCourses ? 
          (
            <TopbarDropdown />
          ) : 
            null
          } 
          </p>
          <i className="fas fa-caret-down"></i>
            <i className="fas fa-bell">
              <div className="ball ball-green"></div>
            </i>
            <i class="fas fa-comment-alt">
              <div className="ball ball-red"></div>
            </i>
          </div>
        ) 
          : (<div className="icons">
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-facebook-f fa-2x" ></i>
            <i className="fab fa-instagram fa-2x" ></i>
            <i className="fab fa-linkedin-in fa-2x"></i>
            <i className="fab fa-pinterest-p fa-2x"></i>
          </div>) }
      </nav>
    )
  }
}

const mapStateToProps = state => (
  {
    isAuthenticated: isAuthenticated(state),
    fullName: fullName(state)
  }
)

export default connect(mapStateToProps)(Topbar);
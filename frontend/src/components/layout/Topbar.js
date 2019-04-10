import React, { Component } from 'react'

class Topbar extends Component {
  render() {
    return (
      <nav className="topbar">
        <div className="icons">
            <i className = "fab fa-twitter fa-2x"></i>
            <i className = "fab fa-facebook-f fa-2x" ></i>
            <i className = "fab fa-instagram fa-2x" ></i>
            <i className = "fab fa-linkedin-in fa-2x"></i>
            <i className = "fab fa-pinterest-p fa-2x"></i>
        </div>
      </nav>
    )
  }
}

export default Topbar;
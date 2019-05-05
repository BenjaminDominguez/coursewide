import React, { Component } from 'react'

export default class Hamburger extends Component {
  render() {
    return (
      <div onClick={this.props.handleClick} className={this.props.showHamburger()}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div> 
      </div>
    )
  }
}


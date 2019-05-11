import React, { Component } from 'react'

class FlashedMessages extends Component {
  render() {
    return (
    <p className={`flashed-message ${this.props.flashClass}`}> { this.props.text }</p> 
    )
  }
}

export default FlashedMessages;

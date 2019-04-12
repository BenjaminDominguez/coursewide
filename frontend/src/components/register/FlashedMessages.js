import React, { Component } from 'react'

class FlashedMessages extends Component {
  render() {
    return (
    <p className={`flashed-message ${this.props.flashClass}`}> { this.props.message }</p> 
    )
  }
}

export default FlashedMessages;

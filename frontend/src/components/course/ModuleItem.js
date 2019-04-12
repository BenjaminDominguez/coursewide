import React, { Component } from 'react'

class ModuleItem extends Component {
  render() {
    return (
      <div className="module-item">
        <h1 className="module-name">{ this.props.moduleName }</h1>
        <p className="module-edit"> Create  or edit module content </p>
      </div>
    )
  }
}

export default ModuleItem;
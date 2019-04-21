import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ModuleItem extends Component {

  handleRedirect = () => {
    const { moduleURL } = this.props;
    this.props.history.push(moduleURL)
  }

  render() {

    const { name } = this.props.module;

    return (
      <div className="module-item" onClick={ this.handleRedirect }>
        <h1 className="module-name"> { name } </h1>
      </div>
    )
  }
}

export default withRouter(ModuleItem);
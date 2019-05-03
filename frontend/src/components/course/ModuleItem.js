import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEnrolled } from '../../reducers'; 
import { withRouter } from 'react-router-dom';

class ModuleItem extends Component {

  handleRedirect = () => {
    if (this.props.isEnrolled) {
      const { moduleURL } = this.props;
      this.props.history.push(moduleURL)
    }
  }

  handleClickable = () => this.props.isEnrolled ? "module-item" : "module-item unclickable"

  render() {

    const { name } = this.props.module;

    return (
      <div className={ this.handleClickable() } onClick={ this.handleRedirect }>
        <h1 className="module-name"> { name } </h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isEnrolled: isEnrolled(state)
})

export default connect(mapStateToProps)(withRouter(ModuleItem));
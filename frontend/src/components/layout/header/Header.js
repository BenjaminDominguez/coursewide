import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../../reducers';
import Navbar from './Navbar';
import Topbar from './Topbar';

class Header extends Component {
  render() {
    return (
    <Fragment>
        { this.props.isAuthenticated ? <Topbar /> : null }
        <Navbar />
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: isAuthenticated(state)
})

export default connect(mapStateToProps)(Header);
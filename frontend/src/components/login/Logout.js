import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class Logout extends Component { 

  render() {
    return (
      <div>
        <li onClick={ this.props.handleLogout }className="nav-link nav-link-login">Logout </li>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
    { handleLogout: () => dispatch(logout()) }
)

export default connect(null, mapDispatchToProps)(Logout);
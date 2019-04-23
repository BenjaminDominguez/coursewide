import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { refreshToken } from '../../reducers';

class Logout extends Component { 

  handleClick = () => {
    const { handleLogout, refreshToken } = this.props;
    handleLogout(refreshToken)
  }

  render() {
    return (
      <div>
        <li onClick={ this.handleClick } className="nav-link nav-link-login">Logout </li>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  refreshToken: refreshToken(state)
})

const mapDispatchToProps = (dispatch) => (
    { handleLogout: (refreshToken) => dispatch(logout(refreshToken)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
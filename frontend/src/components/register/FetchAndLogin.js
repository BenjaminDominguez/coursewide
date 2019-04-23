import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class FetchAndLogin extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(FetchAndLogin);
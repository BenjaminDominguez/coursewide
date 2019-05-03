import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fullName, isAuthenticated } from '../../../reducers';

class Topbar extends Component {}

const mapStateToProps = state => (
  {
    isAuthenticated: isAuthenticated(state),
    fullName: fullName(state)
  }
)

export default connect(mapStateToProps)(Topbar);
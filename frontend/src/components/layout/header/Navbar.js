import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, userID } from '../../../reducers';
import { connect } from 'react-redux';
import Logout from '../../login/Logout';

class Navbar extends Component {

    render() {
        return (
        <nav className="navbar">
            <div className="hamburger hamburger-hidden">
                <div className="line"></div> 
                <div className ="line"></div> 
                <div className ="line"></div> 
            </div>
            <div className="nav-links">
                <span id="nav-brand">CourseWide</span>
                <Link to = "/" className = "link"><span className="nav-link"> Home</span></Link>
                <Link to = "/courses" className="link"><span className = "nav-link">Courses</span></Link>
                <Link className="link"><span className="nav-link">Prospective Instructors</span></Link>
                {
                this.props.isAuthenticated ? (<Logout />) :  
                (<div>
                <Link to="/login" className="link login-link"> <span id="login-link" className="nav-link nav-link-login">Login </span></Link>
                <Link to="/register" className="link"> <span className="nav-link nav-link-login">Register </span></Link>
                </div>)
                }
            </div>
        </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state),
    userID: userID(state)
})

export default connect(mapStateToProps)(Navbar);
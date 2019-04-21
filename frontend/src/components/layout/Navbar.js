import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, userID, username } from '../../reducers';
import { connect } from 'react-redux';
import Logout from '../login/Logout';

class Navbar extends Component {

    render() {
        return (
        <nav className="navbar">
            <div className="hamburger hamburger-hidden">
                <div className="line"></div> 
                <div className ="line"></div> 
                <div className ="line"></div> 
            </div>
            <span id="nav-brand">CourseWide</span>
            <form className="navbar-search-form">
                <input className="navbar-search-input" placeholder="Search for anything you want." type="text" />
            </form>
            <div className="nav-links">
                <Link to = "/" className = "link"><span className="nav-link"> Home</span></Link>
                <Link to = "/courses" className="link"><span className = "nav-link">Courses</span></Link>
                <Link className="link"><span className="nav-link">Prospective Instructors</span></Link>
                {
                this.props.isAuthenticated ? (<Logout />) :  
                (<Link to="/register" className="link"> <span className="nav-link nav-link-login">Register </span></Link>)
                }
            </div>
        </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state),
    userID: userID(state), 
    username: username(state)
})

export default connect(mapStateToProps)(Navbar);
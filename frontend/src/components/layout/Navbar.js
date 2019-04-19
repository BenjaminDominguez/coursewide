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
            <ul className="nav-ul-link">
                <li className = "nav-link" id="nav-brand">CourseWide</li>
                <Link to = "/" className = "link"><li className="nav-link"> Home</li></Link>
                <Link to = "/courses" className="link"><li className = "nav-link">Courses</li></Link>
                <Link className="link"><li className="nav-link">Prospective Instructors</li></Link>
                {
                this.props.isAuthenticated ? (<Logout />) :  
                (<Link to="/register" className="link"> <li className="nav-link nav-link-login">Register </li></Link>)
                }
            </ul>
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
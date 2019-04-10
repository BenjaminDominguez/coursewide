import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar">
            <div className="hamburger hamburger-hidden">
                <div className="line"></div> 
                <div className = "line"> </div> 
                <div className = "line"> </div> 
            </div>
            <ul className="nav-ul-link">
                <li className = "nav-link" id="nav-brand">Brand</li>
                <Link to = "/" className = "link"><li className="nav-link"> Home</li></Link>
                <Link to = "/courses" className="link"><li className = "nav-link">Courses</li></Link>
                <Link className="link"><li className="nav-link">Languages</li></Link>
                <Link className="link"><li className="nav-link">Prospective Instructors</li></Link>
                <Link to="/register" className="link"> <li className="nav-link nav-link-login">Register </li></Link>
            </ul>
        </nav>
        )
    }
}

export default Navbar;
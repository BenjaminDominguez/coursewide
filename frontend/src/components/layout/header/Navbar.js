import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, userID, fullName } from '../../../reducers';
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import Logout from '../../login/Logout';
import NavbarDropdown from './NavbarDropdown';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screenWidth: null, 
            showHamburgerContent: true
        }
    } 

    componentDidMount = () => {
        this.handleWindowWidth();
        window.addEventListener('resize', this.handleWindowWidth);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowWidth);
    }

    handleWindowWidth = () => {
        this.setState({screenWidth: window.innerWidth})
        if (window.innerWidth > 900) {
            this.setState({showHamburgerContent: true})
        } else {
            this.setState({showHamburgerContent: false})
        }
    }

    handleHambugerClick = () => {
        this.setState({showHamburgerContent: !this.state.showHamburgerContent})
    } 

    showHamburger = () => this.state.screenWidth > 900 ? 'hamburger hamburger-hidden' : 'hamburger';

    render() {
        return (
        <nav className="navbar">
            <Hamburger handleClick={this.handleHambugerClick} showHamburger={this.showHamburger} />
            <div className="nav-links">
                <span id="nav-brand">CourseWide</span>
                <div className={`content ${this.state.showHamburgerContent ? "show-content" : "hide-content"}`}>
                <Link to = "/" className = "link"><span className="nav-link"> Home</span></Link>
                <Link to = "/courses" className="link"><span className = "nav-link">Courses</span></Link>
                {
                this.props.isAuthenticated ? 
                //If user is authenticated, add username dropdown plus logout button, else login or register button
                (<React.Fragment>
                <div className="username">
                    <p>Enrolled courses {" "}<i className="fas fa-caret-down"></i></p>
                    <NavbarDropdown />
                </div>
                <Logout />
                </React.Fragment>) :  
                (<React.Fragment>
                <Link to="/teacher" className="link"><span className="nav-link">Prospective Instructors</span></Link>
                <Link to="/login" className="link"> <span className="nav-link nav-link-login">Login </span></Link>
                <Link to="/register" className="link"> <span className="nav-link nav-link-login">Register </span></Link>
                </React.Fragment>)
                }
                </div>
            </div>
        </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state),
    userID: userID(state),
    fullName: fullName(state)
})

export default connect(mapStateToProps)(Navbar);
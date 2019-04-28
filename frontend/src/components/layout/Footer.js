import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className="first-row">
        <div className="courses-available">
            <h1>Courses</h1>
            <a className="courses-available-link">HTML for beginners</a>
            <a className="courses-available-link">React for beginners</a>
            <a className="courses-available-link">Node.JS for beginners</a>
        </div>
        <div className="supported-languages">
            <h1>Languages</h1>
            <a className="supported-languages-link">English</a>
            <a className="supported-languages-link">Spanish</a>
            <a className="supported-languages-link">Korean coming soon!</a>
        </div>
        <div className="right-side-footer">
            <div className="footer-icons">
                <i class="fab fa-twitter fa-3x"></i>
                <i class="fab fa-facebook-square fa-3x"></i>
                <i class="fab fa-instagram fa-3x"></i>
                <i class="fab fa-linkedin-in fa-3x"></i>
                <i class="fab fa-github-alt fa-3x"></i>
            </div>
            <div className="other-info">
            <div className="email other-info-child">contact@coursewide.com</div>
            <div className="phone other-info-child">786-942-2306</div>
            <div className="location other-info-child">Miami, Florida</div>
            </div>
        </div>
      </div>
      <div className="second-row">
      </div>
      </div>
    )
  }
}

export default Footer;

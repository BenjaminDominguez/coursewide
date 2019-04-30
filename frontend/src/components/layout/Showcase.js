import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Register from '../register/Register';

class Showcase extends Component {
  render() {
    return (
      <div className="bg-showcase">
      <div className="grid-container">
        <Row className="cta">
          <Col xs={12} sm={12} md={6} md={6} className="cta-heading">
            <h1 className="cta-text">Here at CourseWide, we provide code courses for spanish speakers. Sign up and start learning to code today.</h1>
          <button className="cta-button">Learn more</button>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="cta-svg">
          </Col>
        </Row>
      </div>
      </div>
    )
  }
}

export default Showcase;

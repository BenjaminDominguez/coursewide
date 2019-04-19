import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid';

class CoursesAvail extends Component {
  render() {
    return (
    <div className="landing-info">
    <Grid fluid>
        <Row>
            <Col xs={12} md={4}>
                <h1 className="landing-info-heading">Korean</h1>

                <ul className="landing-info-ul">
                    <li>HTML for beginners</li>
                    <li>Django for beginners</li>
                    <li>React for beginners</li>
                </ul>
            </Col>
            <Col xs={12} md={4}>
                <h1 className="landing-info-heading">Spanish</h1>
            </Col>
            <Col xs={12} md={4}>
                <h1 className="landing-info-heading">English</h1>
            </Col>  
        </Row>
    </Grid>
    </div>
    )
  }
}

export default CoursesAvail;

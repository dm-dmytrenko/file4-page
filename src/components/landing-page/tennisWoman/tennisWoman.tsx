import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import tennisWomanImage from '../../../static/images/tennisWoman.png';

import './tennisWoman.scss'


const TennisWoman: React.FC = () => {
    return (
      <Container fluid className="tennis-container">
        <Row 
          className="justify-content-md-center"
          style={{ minHeight: '800px', alignItems: 'center'}}
        >
          <Col md={6} className="text-side-left">
            <h1>What's in it for You?</h1>
            <Row className="justify-content-md-center">
              <Col md={9}>
                <p>Income Opportunity: Earn money while doing what you love.</p>
                <p>Health Benefits: Stay in top shape with our health guidelines.</p>
                <p>Recognition: Get noticed for your dedication, not just your trophies.</p>
              </Col>
            </Row>
            
          </Col>
          <Col md={6} className="image-side-right">
            <Row className="justify-content-md-center">
              <Col md={9}>
                <img src={tennisWomanImage} alt="Tennis woman" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default TennisWoman;
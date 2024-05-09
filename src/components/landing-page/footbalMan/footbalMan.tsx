import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import footbalImage from '../../../static/images/footBallMan.png';
import './footbalMan.scss';


const FootbalMan: React.FC = () => {
    return (
      <div className="footbal-container">
        <Row style={{ alignItems: 'center'}}>
          <Col sm md={7} className="image-side-left">
            <img src={footbalImage} alt="Football player" />
          </Col>
          <Col sm md={5} className="text-side-right-football">
            <Row className='justify-content-md-center'>
              <Col md={11}>
                <h1>How it Works:</h1>
              </Col>
            </Row>
            <p>
              <b>Tell Us Your Sport:</b> Share with us the sport that thrills you.
            </p>
            <p>
              <b>Healthy Habits:</b> Your lifestyle and habits matter. Fill out our detailed questionnaire.
            </p>
            <p>
              <b>Proof of Dedication:</b> Provide additional information to show us your commitment.
            </p>
            <p>
              <b>Comprehensive Interview:</b> Let's talk and see if you're a fit for our program.
            </p>
            <p>
              <b>Health Assessment:</b> Pass our tests, and you're in!
            </p>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default FootbalMan;
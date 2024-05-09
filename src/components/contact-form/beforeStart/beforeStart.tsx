import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './beforeStart.scss'

import bodySetLeft from '../../../static/images/body-set-left.png';
import bodySetRight from '../../../static/images/body-set-right.png';


const BeforeStart: React.FC = () => {
    return (
      <Container className="before-start-container">
        <h2 className='gradient-text'>Before You Start</h2>
        <Col className='before-start-wrapper'>
            <Row>
              <h3>You will need</h3>
              <p>recent photos of your physique from neck down, in your swimsuit / swim      trunks, like the photos below.</p>
            </Row>
            <Row style={{marginTop:'35px'}}>
              <Col 
                className="d-flex justify-content-center align-items-center"
                md={{ span: 5, offset: 1 }}
              >
              <img src={bodySetLeft} alt="men bodies" /> 
              </Col>
              <Col 
                className="d-flex justify-content-center align-items-center"
                md={{ span: 5, offset: 1 }}
              >
              <img src={bodySetRight} alt="women bodies" /> 
              </Col>
            </Row>
            <Row>
              <h3 style={{marginTop:'97px'}}>Also, You May</h3>
              <p>Need To Check With Your Parents About:</p>
              <ul>
                  <li>Your antibiotic history</li>
                  <li>Your birthing method - vaginal delivery, c-section</li>
                  <li>If you were breastfed, and if so, for how long</li>
              </ul>
            </Row>
        </Col>
      </Container>
    );
  };
  
  export default BeforeStart;
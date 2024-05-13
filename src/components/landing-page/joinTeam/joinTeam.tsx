import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teamImage from '../../../static/images/team.png';
import { Link } from "react-router-dom";

import './joinTeam.scss'

const JoinTeam: React.FC = () => {
  return (
    <Container fluid className="team-container justify-content-center">
      <Row fluid className='justify-content-center team-wrapper'>
        <Col md={7} lg xl={6} className="image-side-left d-flex flex-column justify-content-center">  
          <img src={teamImage} alt="team image" />
        </Col>
        <Col md={5} lg xl={6} className="text-side-right d-flex flex-column justify-content-center">
          <Row>
            <Col>
              <h1>Join</h1>
              <h2>Our team of</h2>
              <h2>Healthy, dedicated athletes!</h2>
              <h3>Turn your passion into opportunity!</h3>
              <Link to='/contact'>
              <button  className='custom-btn'>Apply Now!</button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    );
  };
  
  export default JoinTeam;
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './headerForm.scss';

const HeaderForm: React.FC = () => {
  return (
    <Container fluid className='header-container'>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs="auto" className="gradient-text text-center">
          <h1>Required Information</h1>
          <p>(Complete Thoroughly)</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderForm;
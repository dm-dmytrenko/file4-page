import React from 'react';
import { Col, Form } from 'react-bootstrap';

import './question-checkbox.scss';

interface QuestionCheckboxProps {
    listText: string;
    checkboxLabels?: string[];
  }

const QuestionCheckbox: React.FC<QuestionCheckboxProps> = ({ listText, checkboxLabels=[] }) => (
  <div className="question-checkox-container">
    <ul>
      <li>{listText}</li>
    </ul>

    <Col md={{ offset: 1 }}>
      <div className="d-grid gap-1">
        {checkboxLabels.map((label, index) => (
          <Form.Check
            key={index}
            className="text-14"
            type="checkbox"
            label={label}
          />
        ))}
      </div>
    </Col>
  </div>
);

export default QuestionCheckbox;
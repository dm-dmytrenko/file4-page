import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';

import './question-checkbox.scss';

interface QuestionCheckboxProps {
    listText: string;
    checkboxLabels?: string[];
    onChange: (values: string[]) => void;
    className?: string;
  }

  const QuestionCheckbox: React.FC<QuestionCheckboxProps> = ({ listText, checkboxLabels = [], onChange, className="d-grid gap-1" }) => {
    
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (value: string) => {
      const updatedValues = [...selectedValues];
      if (updatedValues.includes(value)) {
        updatedValues.splice(updatedValues.indexOf(value), 1);
      } else {
        updatedValues.push(value);
      }
      setSelectedValues(updatedValues);
      onChange(updatedValues);
    };


    return (
      <div className="question-checkox-container">
        <ul>
          <li>{listText}</li>
        </ul>

        <Col md={{ offset: 1 }}>
          <div className={className}>
            {checkboxLabels.map((label, index) => (
              <Form.Check
                key={index}
                className="text-14"
                type="checkbox"
                label={label}
                onChange={() => handleCheckboxChange(label)}
              />
            ))}
          </div>
        </Col>
      </div>
    );
  };

export default QuestionCheckbox;
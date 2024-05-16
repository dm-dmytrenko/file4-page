import React from 'react';
import { Col, Form } from 'react-bootstrap';

interface CustomFormFieldProps {
    label: string;
    placeholder: string;
    name?: string,
    md?: number;
    xs?: number;
    className?: string;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    as?: React.ElementType;
  }

const CustomFormField: React.FC<CustomFormFieldProps> = ({ 
  name,
  label, 
  placeholder, 
  md = 6, 
  xs = 12,
  onInputChange,
  className = 'control-label'
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onInputChange) {
      onInputChange(event);
    }
  };
  return (
    <Col md={md} xs={xs}>
      <Form.Group className="mb-4" controlId="">
        <Form.Label className={className}>{label}</Form.Label>
        <Form.Control
          className="form-control-custom"
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Form.Group>
    </Col>
  )
};

export default CustomFormField;
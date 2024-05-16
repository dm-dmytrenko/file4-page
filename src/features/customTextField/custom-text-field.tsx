import React from 'react';
import { Col, Form } from 'react-bootstrap';

interface CustomFormFieldProps {
    label: string;
    placeholder: string;
    name?: string,
    md?: number;
    xs?: number;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    as?: React.ElementType;
  }

const CustomFormField: React.FC<CustomFormFieldProps> = ({ 
  name,
  label, 
  placeholder, 
  md = 6, 
  xs = 12,
  onChange,
  className = 'control-label'
}) => (
  <Col md={md} xs={xs}>
    <Form.Group className="mb-4" controlId="">
      <Form.Label className={className}>{label}</Form.Label>
      <Form.Control
        className="form-control-custom"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  </Col>
);

export default CustomFormField;
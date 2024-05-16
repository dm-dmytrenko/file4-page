import React, { useState } from 'react';
import {Col, Form, Row, Button} from "react-bootstrap";
import CustomFormField from '../../features/customTextField/custom-text-field';
import GradientTextComponent from '../../features/gradient-text/gradient-text';

import './contact-us.scss';
import { Link } from 'react-router-dom';

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData: any) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData((prevData: any) => ({
        ...prevData,
        [name]: checked,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };
  
    return (
        <div className='contact-us-container d-flex align-items-center justify-content-center'>
            <Form className='form-wrapper' onSubmit={handleSubmit}>
            <Form.Group>
                <Row 
                    className="justify-content-center"
                    style={{padding:'20px 0 20px 0'}}
                >
                    <Col className="text-center">
                        <GradientTextComponent text="CONTACT US"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <CustomFormField 
                        label="Name"
                        placeholder='Enter your name' 
                        name='name'
                        className='control-label-white'
                        xs={10} md={8}
                        onChange={handleInputChange}
                    />
                    <CustomFormField 
                        label="Company Name" 
                        placeholder='Enter your company namr' 
                        name='company-name'
                        className='control-label-white'
                        xs={10} md={8}
                        onChange={handleInputChange}
                    />
                    <CustomFormField 
                        label="Position" 
                        placeholder='Enter your position' 
                        name='position'
                        className='control-label-white'
                        xs={10} md={8}
                        onChange={handleInputChange}
                    />
                    <CustomFormField 
                        label="Phone" 
                        placeholder='Enter your phone' 
                        name='phone'
                        className='control-label-white'
                        xs={10} md={8}
                        onChange={handleInputChange}
                    />
                    <CustomFormField 
                        label="Email" 
                        placeholder='Enter your email' 
                        name='email'
                        className='control-label-white'
                        xs={10} md={8}
                        onChange={handleInputChange}
                    />
                    <CustomFormField 
                        label="Best time to reach you" 
                        placeholder='Enter a time that is convenient for you' 
                        name='best-time'
                        className='control-label-white'
                        xs={10} md={8}
                        onChange={handleInputChange}
                    />
                    <Col xs={10} md={8} className="d-grid gap-1 contact-us-checkbox">
                        <Form.Check 
                            className="text-18" 
                            type="checkbox" 
                            label="Interested in more details"
                            name='moreDetails'
                            style={{ color: 'white' }} 
                            onChange={handleCheckboxChange}
                        />
                    </Col>
                    <Col xs={10} md={8} className="d-grid gap-1 contact-us-checkbox">
                        <Form.Check 
                            className="text-18" 
                            type="checkbox" 
                            label="Referral program"
                            name='referralProgram'
                            style={{ color: 'white' }} 
                            onChange={handleCheckboxChange}
                        />
                    </Col>
                    <Col xs={10} md={8} className="d-grid gap-1 contact-us-checkbox">
                        <Form.Check 
                            className="text-18" 
                            type="checkbox" 
                            label="Other"
                            name='otherCheckbox'
                            style={{ color: 'white' }} 
                            onChange={handleCheckboxChange}
                        />
                        <Form.Group className="mb-4" controlId="">
                            <Form.Control
                                as="textarea"
                                className="form-control-custom"
                                style={{height:'100px', marginTop:'10px'}}
                                placeholder={'Enter your message'}
                                name='other'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row 
                    className="justify-content-center"
                    style={{paddingBottom: '25px'}}
                >
                    <Col xs={10} sm={6} md={4} lg={3} xl={2}>
                        <Link to='/'>
                            <Button 
                                className='custom-btn' 
                                style={{border:'none', width:'100%'}}
                                type="submit"
                            >
                                SUBMIT
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Form.Group>
            </Form>
        </div>
    );
    };

export default ContactUsPage;

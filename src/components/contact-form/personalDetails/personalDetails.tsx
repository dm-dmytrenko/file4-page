import React from 'react';

import {Col, Form, Row} from "react-bootstrap";

import CustomFormField from '../../../features/customTextField/custom-text-field';
import './personalDetails.scss'

const PersonalDetails: React.FC = () => {
  return (
    <>
        <main className="personal-detail-page">
            <div className="container-sm">
                <div className="mb-4 text-center">
                    <h3 className="page-title mb-5">Personal Contact Details</h3>
                </div>
                <Row style={{paddingTop: '10px'}}>
                    <CustomFormField placeholder='Enter your name' label='name'/>
                    <CustomFormField placeholder='Enter your email' label='email'/>
                    <CustomFormField placeholder='Enter your phone' label='phone'/>
                    <CustomFormField placeholder='Enter your gender' label='gender'/>
                    <CustomFormField placeholder='Enter your age' label='age'/>
                    <CustomFormField placeholder='Enter your profession' label='profession'/>
                    <CustomFormField placeholder='Enter your cell' label='cell'/>
                    <CustomFormField placeholder='Enter your country' label='country'/>
                    <CustomFormField placeholder='Enter your address' label='address'/>
                    <CustomFormField placeholder='Enter your city' label='city'/>
                    <CustomFormField placeholder='Enter your states' label='states'/>
                    <CustomFormField placeholder='Enter your zip' label='zip'/>
                </Row>
                <Col xs={12}>
                    <Form.Group className="mb-4" controlId="">
                    <Row>
                        <Col>
                            <Form.Label className="question-title mb-3">Do you have Social Media Accounts?</Form.Label>
                        </Col>
                        <Col>
                            <div className="d-flex gap-4">
                                <Form.Check type="radio" name='radio-1' label={'Yes'} />
                                <Form.Check type="radio" name='radio-1' label={'No'} />
                            </div>
                        </Col>
                    </Row>
                    
                    <Row style={{paddingRight: '13px'}}>
                        <Col
                            md={{ span: 3, offset: 2 }}
                        >
                            <Form.Label className="control-label mb-3">If Yes which ones:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 2 }}>
                            <div className="d-grid gap-1">
                                <Form.Check className="text-14" type="checkbox" label="Facebook/Meta" />
                                <Form.Check className="text-14" type="checkbox" label="LinkedIn" />
                                <Form.Check className="text-14" type="checkbox" label="Instagram" />
                                <Form.Check className="text-14" type="checkbox" label="Tick Tok" />
                                <Form.Check className="text-14" type="checkbox" label="YouTube" />
                                <Form.Check className="text-14" type="checkbox" label="Twitter/X" />
                            </div>
                        </Col>
                    </Row>
            
                    <Row>
                        <Col xs={12}>
                            <div className="mb-3">
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Label className="question-title mb-3">How did you hear about us?   (If you can recall exactly where on Instagram, TikTok, etc., please specify using "other".)</Form.Label>
                                    <Row>
                                    <Col md={{ span: 3, offset: 2 }}>
                                    <div className="d-grid gap-1">
                                        <Form.Check className="text-14" type="checkbox" label="Word of mouth" />
                                        <Form.Check className="text-14" type="checkbox" label="Facebook" />
                                        <Form.Check className="text-14" type="checkbox" label="Twitter" />
                                        <Form.Check className="text-14" type="checkbox" label="Reddit" />
                                        <Form.Check className="text-14" type="checkbox" label="Other:" />
                                    </div>
                                    </Col>
                                    <Col>
                                    <div className="d-grid gap-1">
                                        <Form.Check className="text-14" type="checkbox" label="The Money Minimalists" />
                                        <Form.Check className="text-14" type="checkbox" label="Instagram" />
                                        <Form.Check className="text-14" type="checkbox" label="LinkedIn" />
                                        <Form.Check className="text-14" type="checkbox" label="Nextdoor" />
                                    </div>
                                    </Col>
                                    <Col>
                                    <div className="d-grid gap-1">
                                        <Form.Check className="text-14" type="checkbox" label="YouTube" />
                                        <Form.Check className="text-14" type="checkbox" label="TikTok" />
                                        <Form.Check className="text-14" type="checkbox" label="Craigslist" />
                                        <Form.Check className="text-14" type="checkbox" label="Flyer" />
                                    </div>
                                    </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row> 
                    </Form.Group>
                </Col>
            </div>
        </main>
    </>
    );
  };
  
  export default PersonalDetails;
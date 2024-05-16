import React, { useState } from 'react';

import {Col, Form, Row} from "react-bootstrap";

import CustomFormField from '../../../features/customTextField/custom-text-field';
import './personalDetails.scss'


const socialMediaObj = {
    haveSocialMedia: [
        'Facebook/Meta',
        'LinkedIn',
        'Instagram',
        'Tick Tok',
        'YouTube',
        'Twitter/X'
    ],
    howDidHearAboutUs: [
        'Word of mouth',
        'The Money Minimalists',
        'YouTube',
        'Facebook',
        'Instagram',
        'TikTok',
        'Twitter',
        'LinkedIn',
        'Craigslist',
        'Reddit',
        'Nextdoor',
        'Flyer',
        'Other:'
    ]
};
  

interface PersonalDetailsProps {
    onChange: (groupName: string, values: string[]) => void;
}

const PersonalDetails:  React.FC<PersonalDetailsProps> = ({ onChange }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (value: string, groupName: string) => {
      const updatedValues = [...selectedValues];
      if (updatedValues.includes(value)) {
        updatedValues.splice(updatedValues.indexOf(value), 1);
      } else {
        updatedValues.push(value);
      }
      setSelectedValues(updatedValues);
      onChange(groupName, updatedValues);
    };
    
  return (
    <div className="personal-detail-page">
        <div className="container-sm">
            <div className="mb-4 text-center">
                <h3 className="page-title mb-5">Personal Contact Details</h3>
            </div>
            <Row style={{paddingTop: '10px'}}>
                <CustomFormField placeholder='Enter your name' label='name' name="personalName" />
                <CustomFormField placeholder='Enter your email' label='email' name="personalEmail" />
                <CustomFormField placeholder='Enter your phone' label='phone' name="personalPhone" />
                <CustomFormField placeholder='Enter your gender' label='gender' name="personalGender"/>
                <CustomFormField placeholder='Enter your age' label='age' name="personalAge"/>
                <CustomFormField placeholder='Enter your profession' label='profession' name="personalProfession"/>
                <CustomFormField placeholder='Enter your cell' label='cell' name="personalCell" />
                <CustomFormField placeholder='Enter your country' label='country' name="personalCountry" />
                <CustomFormField placeholder='Enter your address' label='address' name="personalAddress" />
                <CustomFormField placeholder='Enter your city' label='city' name="personalCity" /> 
                <CustomFormField placeholder='Enter your states' label='states' name="personalStates" />
                <CustomFormField placeholder='Enter your zip' label='zip' name="personalZip" />
            </Row>
            <Col xs={12}>
                <Form.Group className="mb-4" controlId="">
                <Row>
                    <Col>
                        <Form.Label className="question-title mb-3">Do you have Social Media Accounts?</Form.Label>
                    </Col>
                    <Col>
                        <div className="d-flex gap-4">
                            <Form.Check type="radio" name='socialMediaExistence' label={'Yes'} value='yes' />
                            <Form.Check type="radio" name='socialMediaExistence' label={'No'} value='no' />
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
                    <Col xs={{ span: 3, offset: 2 }} md={{ span: 3, offset: 2 }}>
                        <div className="d-grid gap-1">
                            {socialMediaObj.haveSocialMedia.map((label, index) => (
                                <Form.Check 
                                    key={index}
                                    className="text-14" 
                                    type="checkbox" 
                                    label={label} 
                                    onChange={() => handleCheckboxChange(label, 'haveSocialMedia')} 
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
        
                <Row>
                    <Col xs={12}>
                        <div className="mb-3">
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="question-title mb-3">How did you hear about us?   (If you can recall exactly where on Instagram, TikTok, etc., please specify using "other".)</Form.Label>
                                <Row>
                                {socialMediaObj.howDidHearAboutUs.map((label, index) => (
                                    <Col
                                    key={index}
                                    xs={{ span: 4, offset: index % 3 === 0 ? 2 : 0 }}
                                    md={{ span: 3, offset: index % 3 === 0 ? 2 : 0 }}
                                    >
                                    <div className="d-grid gap-1">
                                        <Form.Check
                                            className="text-14" 
                                            type="checkbox" 
                                            label={label}
                                            onChange={() => handleCheckboxChange(label, 'howDidHearAboutUs')} 
                                        />
                                    </div>
                                    </Col>
                                ))}
                                </Row>
                            </Form.Group>
                        </div>
                    </Col>
                </Row> 
                </Form.Group>
            </Col>
        </div>
    </div>
    );
  };
  
  export default PersonalDetails;
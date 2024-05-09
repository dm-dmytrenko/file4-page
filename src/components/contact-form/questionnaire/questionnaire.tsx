import React, { useState, useEffect } from 'react';
import {Col, Form, Row, Container} from "react-bootstrap";
import CustomFormField from '../../../features/customTextField/custom-text-field';
import GradientTextComponent from '../../../features/gradient-text/gradient-text';
import QuestionCheckbox from '../../../features/questionCheckbox/question-checkbox';
import fecesImage from '../../../static/images/feces.png';
import scrollThumb from '../../../static/images/scroll-thumb.png';

import './questionnaire.scss';

const Questionnaire: React.FC = () => {
    const startScrollTop = 2228;
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        console.log('scrollHeight = ', scrollHeight);
        console.log('scrollTop = ', scrollTop);
        console.log('clientHeight = ', clientHeight);

        const scrollableHeight = scrollHeight - clientHeight;
        let percentage = 0;
        if (scrollTop > startScrollTop) {
            const adjustedScrollTop = scrollTop - startScrollTop;
            const adjustedScrollableHeight = scrollableHeight - startScrollTop;

            percentage = (adjustedScrollTop / adjustedScrollableHeight) * 100;
        }
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <Container className='question-container'>
        <Row 
            className="justify-content-md-center"
            style={{margin:'37px 0 37px 0'}}
        >
            <Col md="auto">
                <GradientTextComponent text="Questionnaire"/>
            </Col>
        </Row>
        <Row>
            <p>
                <b>IMPORTANT!</b> This questionnaire's purpose is to gauge both your potential efficacy and safety as a stool donor. It is not in your best interest to be untruthful on this questionnaire. At best you would be an ineffective donor and would not be used after a few donations, or worse, you could seriously harm someone, which may result in legal action if it is determined that you lied.
            </p>
            <div className="d-grid gap-1" style={{marginLeft:'5px'}}>
                <Form.Check className="text-20" type="checkbox" label="I understand." />
            </div>
            <p style={{paddingTop: '40px'}}>
                I certify that the foregoing is true, correct, and complete. And if I am selected I could be asked for medical reports to confirm my statements. I understand that the accuracy, truthfulness, and completeness of my answers is important for patient safety.
            </p>
            <div className="d-grid gap-1" style={{marginLeft:'5px'}}>
                <Form.Check className="text-20" type="checkbox" label="I do." />
            </div>
        </Row>
        <Form.Group>
            <Row style={{marginTop:'56px'}}>
                <Col md={2} style={{ position: 'relative' }} className="d-flex flex-column justify-content-center align-items-center">
                <div className="custom-scrollbar">
                    <img
                        className="status-bar"
                        src={scrollThumb}
                        style={{
                            position: 'absolute',
                            top: `${scrollPercentage}%`,
                            marginLeft: '-18.5px',
                            minWidth: '42.43px',
                            width: '100%',
                        }}
                    />
                </div>
                </Col>
                <Col md={8}>
                <div>
                    <Row>
                        <CustomFormField label="dob" placeholder='Enter your DOB' xs={6} md={6} className='control-label-white'/>
                        <CustomFormField label="age" placeholder='Enter your Age' xs={6} md={6} className='control-label-white'/>
                    </Row>
                    <Row>
                        <CustomFormField label="height" placeholder='Enter your height' xs={6} md={6} className='control-label-white'/>
                        <CustomFormField label="height" placeholder='Enter your weight' xs={6} md={6} className='control-label-white'/>
                    </Row>
                    <Row>
                        <Form.Label className="control-label-white mb-3">gender</Form.Label>
                        <div 
                            className="d-flex gap-4"
                            style={{paddingLeft: '9%'}}
                        >
                            <Form.Check className="text-14" type="checkbox" label="Male" />
                            <Form.Check className="text-14" type="checkbox" label="Female" />
                            <Form.Check className="text-14" type="checkbox" label="Prefer not to say" />
                            <Form.Check className="text-14" type="checkbox" label="Other" />
                        </div>
                    </Row>
                    <Row>
                        <CustomFormField 
                            label="Body fat percentage" 
                            placeholder='Enter your body fat percentage' 
                            xs={6} md={6}
                            className='control-label-white'
                        />
                        <Col 
                            style={{
                                display:"flex", 
                                alignItems:"center", 
                                marginTop: '15px'
                            }}
                            xs={6} md={6}
                        >
                            <a href='#'><p>Click here to calculate:  BFP Calculator</p></a>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Antibiotic use (including antifungals and antivirals):"
                            checkboxLabels={['Male', 'Female', 'Prefer not to say', 'Other']}
                        />
                    </Row>  
                    <Row style={{marginTop:'20px'}}>
                        <Form.Label className="control-label-white mb-3">What sport do you play?</Form.Label>
                        <Col xs md={6}>
                           <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Sport/exercise proficiency?"
                            checkboxLabels={['College', 'Semi Pro', 'Professional','Amateur','Other']}
                        />
                    </Row> 
                    <Row>
                        <QuestionCheckbox 
                            listText="Sport/exercise frequency?"
                            checkboxLabels={['Once a week or less', 'A few times per week', 'Daily or close to daily', 'Other']}
                        />
                    </Row> 
                    <Row>
                        <QuestionCheckbox 
                            listText="Sport/exercise performance?"
                            checkboxLabels={['Poor', 'Average', 'Good', 'Excellent', 'Champion level', 'Other']}
                        />
                    </Row> 
                    <Row>
                        <QuestionCheckbox 
                            listText="I was born via:"
                            checkboxLabels={['Vaginal birth', 'Caesarean section, also known as C-section', 'Don\'t know']}
                        />
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col>
                            <Form.Label className="control-label-white mb-3">Were you breastfed?</Form.Label>
                        </Col>
                        <Col md={{ span: 8, offset: 1}}>
                            <div className="d-flex gap-4">
                                <Form.Check type="radio" name="radio-2" label={'Yes'} />
                                <Form.Check type="radio" name="radio-2" label={'No'} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="If yes, how long:"
                            checkboxLabels={['Less than 6 months', 'At least 6 months', 'At least 1 year', 'At least 2 years', 'Not sure']}
                        />
                    </Row>
                    <Row>
                        <Col md={6} sm={3}>
                        <QuestionCheckbox 
                            listText="Bristol Stool Type ? "
                            checkboxLabels={['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Other']}
                        />
                        </Col>
                        <Col 
                            md={6} sm={9}
                            style={{display:"flex", alignItems:"center"}}
                        >
                            <img src={fecesImage} alt="feces" style={{width:'100%'}} />
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Stool consistency:  (Please use "Other" to provide further details, such as which foods cause what changes)'
                            checkboxLabels={['Varies (unknown reason):', 'Varies due to exercise:', 'Almost always the same type:', 'Other']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='How often do you experience bloating or gas that will bother you?'
                            checkboxLabels={['Rarely or never', 'Occasionally', 'Frequently']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Diarrhea?'
                            checkboxLabels={['Rarely or never', 'Occasionally', 'Frequently']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Constipation?'
                            checkboxLabels={['Rarely or never', 'Occasionally', 'Frequently']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Upper GI?  (If yes, please use "Other" to specify severity and current/past)'
                            checkboxLabels={['Acid reflux', 'Heartburn', 'Ulcers', 'Pancreatitis', 'No problems', 'Other:']}
                        />
                        <Col md={{ span: 6, offset: 1 }}>
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='What is your current diet like, and your dietary history (especially as a child)?'
                        />
                        <Col md={{ span: 6, offset: 1 }}>
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                        <QuestionCheckbox 
                            listText='Any food cravings?'
                            checkboxLabels={['No', 'Other:']}
                        />
                        </Col>
                        <Col md={4}>
                        <QuestionCheckbox 
                            listText='Any food intolerances?'
                            checkboxLabels={['No', 'Other:']}
                        />
                        </Col>
                        <Col md={4}>
                        <QuestionCheckbox 
                            listText='Allergies? (food, drug, pets, etc.)'
                            checkboxLabels={['No', 'Other:']}
                        />
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Probiotics, medications, supplements?  (If yes, use "Other" to specify)'
                            checkboxLabels={['No', 'Currently', 'In the past', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <Col md={4}>
                        <QuestionCheckbox 
                            listText='Blood Donor?'
                            checkboxLabels={['Yes', 'No']}
                        />
                        </Col>
                        <Col md={3}>
                            <QuestionCheckbox 
                                listText='Blood Type?'
                            />
                            <Col md={{ span: 6, offset: 1 }}>
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Have you had any blood or stool tests in the past?'
                            checkboxLabels={['More than a year ago', 'In the past year', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='If there were any abnormal results, please specify:'
                        />
                        <Col md={{ span: 6, offset: 1 }}>
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='History of, or known exposure to, HIV, HBV or HCV, syphilis, human T-lymphotropic virus I and II, malaria, trypanosomiasis, tuberculosis?'
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Tattoo or body piercing within previous 6 months?'
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Incarceration or history of incarceration?'
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Known systemic infection or current communicable disease?'
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Mononucleosis/Epstein-Barr virus (EBV)? *'
                            checkboxLabels={['No', 'Not sure', 'More than a year ago', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Have you ever been bitten by a tick or diagnosed with Lyme disease?'
                            checkboxLabels={['No', 'Don\'t know, no symptoms.', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Previous reception of blood products?'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Recent (<6 months) needle stick accident?'
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Recent medical treatment in poorly hygienic conditions? *'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Risk of transmission of diseases caused by prions? *'
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Parasite infection? (rotavirus, Giardia lamblia, etc.) If yes, please use "Other" to specify.'
                            checkboxLabels={['No', 'More than a year ago', 'Within the past year', 'Saw or suspected one, but not officially diagnosed.', 'Diagnosed and treated.', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Recent (<6 months) travel in tropical countries, countries at high risk of communicable diseases or traveler's diarrhea?"
                            checkboxLabels={['Yes', 'No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Surgeries, transplants, hospitalizations?'
                            checkboxLabels={['No', 'Tonsils removed', 'Appendix removed', 'Gallbladder removed', 'Adenoids removed', 'Pancreas removed', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Any drug use?'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Risky sexual behavior (anonymous sexual contacts; sexual contacts with prostitutes, drug addicts, individuals with HIV, viral hepatitis, syphilis; work as prostitute; history of sexually transmittable disease, unprotected sex with untested partners)?'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='If So, how frequent / recent?'
                        />
                        <Col md={{ span: 6, offset: 1 }}>
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Fungal or viral infections? (Candida, Herpes, etc.) If yes, please use "Other" to specify.'
                            checkboxLabels={['No', 'Yes, in the past.', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Do you have any contagious or sexually transmitted disease? *
                            If yes, please use "Other" to specify.'
                            checkboxLabels={['No', 'Yes, in the past.', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Have you ever had hemorrhoids?'
                            checkboxLabels={['Yes','No']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Smoked or lived with smokers?'
                            checkboxLabels={['Yes','I currently smoke Tobacco','I currently smoke Cannabis','I used to smoke Tobacco','I used to smoke Cannabis','I only smoke occasionally','Live with smokers currently','Lived with smokers in the past','Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Addictions or addictive behavior?'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <QuestionCheckbox 
                                    listText='How many hours of sleep do you typically get?'
                                />
                            </Row>
                        </Col>
                        <Col 
                            md={2}
                            style={{
                                display:"flex", 
                                alignItems:"center", 
                                marginTop: '10px'
                            }}
                        >
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='How frequently do you wake at night?'
                            checkboxLabels={['Never or very rarely', 'Once per night', 'Twice per night', 'More than 2 times per night', 'Cause for waking? *', 'I wake to urinate', 'I wake due to restlessness', 'Not sure', 'N/A', 'Other']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='How long till you fall asleep? *'
                            checkboxLabels={['Under 15 minutes', 'Under 15 minutes', 'Under 1 hourt', 'More than 1 hour']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Sleep quality?'
                            checkboxLabels={['Poor', 'Average', 'Good', 'Excellent']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Do you dream every night and remember them when you wake?'
                            checkboxLabels={['Almost always', 'Sometimes', 'Rarely']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Any autoimmune disease? (celiac, lupus, fibromyalgia, chronic fatigue, etc.) *'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Metabolic disorders?'
                            checkboxLabels={['Heart disease', 'Stroke', 'Diabetes', 'High blood pressure', 'Low blood pressure', 'High blood sugar', 'Low blood sugar', 'No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Cancer?'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Inflammatory bowel disease?'
                            checkboxLabels={['No', 'In the past', 'Currently']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Skin issues?'
                            checkboxLabels={['Psoriasis', 'Dermatitis', 'Eczema', 'Dandruff', 'Excess dryness', 'Rashes', 'No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Acne?'
                            checkboxLabels={['No', 'In the past', 'Mild', 'Moderate', 'Severe']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Hair loss or balding?  If yes, you can use "Other" to elaborate.'
                            checkboxLabels={['Thinning', 'No', 'Mild', 'Moderate', 'Severe', 'Other']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Vision problems?'
                            checkboxLabels={['No', 'Glasses', 'Other']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Headaches?'
                            checkboxLabels={['Never', 'Rarely', 'Occasionally', 'Frequently', 'In the past', 'Migraines', 'Other']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Hepatitis?'
                            checkboxLabels={['No', 'In the past', 'Currently', 'A', 'B', 'C']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='How often do you get sick? (flu, colds, etc.)'
                            checkboxLabels={['About once a year', 'Multiple times per year', 'Less than once a year', 'When under stress', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Urinary tract infections?'
                            checkboxLabels={['Never', 'Once or twice', 'Many times', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Oral health?'
                            checkboxLabels={['Root canals', 'Metal/amalgam fillings', 'Non-metal fillings', 'Braces', 'Crowns, veneers', 'Halitosis (bad breath)', 'Infections', 'No issues or work done', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Ears/hearing'
                            checkboxLabels={['No problems', 'Tinnitus or ear ringing that is not due to loud noise or physical damage', 'Severe or frequent ear infections', 'Ear pain', 'Hearing loss, veneers', 'Tubes', 'Other']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Sex drive and function?'
                            checkboxLabels={['Not applicable, donor is a child', 'Poor', 'Average', 'Good', 'Excellent']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Academic performance?'
                            checkboxLabels={['Not applicable, donor is very young', 'Poor', 'Average', 'Good', 'Excellent']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Have A's in class always come easy?"
                            checkboxLabels={['All the time', 'Sometimes', 'Rarely', 'Never', 'Not applicable, donor is very young and not yet in school']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Have you been exposed to mold or is there mold in your home? (black, white, green, brown spots on ceilings or walls)'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Temperature sensitivity?"
                            checkboxLabels={['Get cold easily/can\'t tolerate cold', 'Get hot easily/can\'t tolerate heat', 'No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Any chronic illness or health issues not previously listed? (body odors, heart, lungs/breathing, bladder, hormonal, any kind of sensitivities, issues during/with menstruation)'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Any congenital/birth defect/disease of self or immediate family members? *'
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText='Health status/fitness of parents and siblings?'
                        />
                        <Col md={{ span: 6, offset: 1 }}>
                            <Form.Control className="text-14" placeholder='write here.....'/>
                        </Col>
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Any close relatives with mental or physical illness? (Alzheimer's, cancers, depression/suicide, heart failure, obesity, diabetes, GI issues, etc.) If parents have health problems, at what ages did they develop?"
                            checkboxLabels={['No', 'Other:']}
                        />
                    </Row>
                    <Row>
                        <QuestionCheckbox 
                            listText="Race/Ethnicity:"
                            checkboxLabels={['Asian', 'Other']}
                        />
                    </Row>
                    </Row>
                    </div>
                </Col>
            </Row>
        </Form.Group>
    </Container>
    );
  };
  
  export default Questionnaire;
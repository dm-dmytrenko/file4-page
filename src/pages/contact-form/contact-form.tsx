import React from 'react';

import HeaderForm from '../../components/contact-form/headerForm/headerForm';
import BeforeStart from '../../components/contact-form/beforeStart/beforeStart';
import Questionnaire from '../../components/contact-form/questionnaire/questionnaire';
import GradientBox from '../../features/gradient-box/gradient-box';

import './contact.scss';

const ContactForm: React.FC = () => {
  return (
    <div className='contact-form'>
      <HeaderForm />
      <BeforeStart />
      <Questionnaire />
      <GradientBox height='39px'/>
    </div>
  );
};

export default ContactForm;

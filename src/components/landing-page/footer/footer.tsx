import React from 'react';
import './footer.scss';

import GradientBox from '../../../features/gradient-box/gradient-box';

const Footer: React.FC = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <p>Disclaimer: Participation is subject to passing the health assessment and interview process.  All information provided will be used solely for the purpose of this program. </p>
      </div>
      <GradientBox height='39px' />
      <div className='footer-botom'>
        <p>SOSX Inc. 2022 Terms and conditions apply. <a href='#'>Cookies Policy</a>.</p>
      </div>
    </div>
  );
};

export default Footer;
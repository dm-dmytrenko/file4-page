import React from 'react';
import { Link } from 'react-router-dom';
import './requestDetails.scss';

const ReqestDetails: React.FC = () => {
    return (
        <div className='details-container'>
            <h1>Know someone perfect for this?</h1>
            <p>
                $1,000 Referral Bonus:  Know an athlete who meets our criteria?  Refer them and earn a cash bonus when they qualify!
            </p>
            <Link to='/contact-us'>
                <button className='custom-btn'>Contact Us</button>
            </Link>
        </div>
    );
  };
  
  export default ReqestDetails;
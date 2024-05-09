import React from 'react';
import './requestDetails.scss';

const ReqestDetails: React.FC = () => {
    return (
        <div className='details-container'>
            <h1>Know someone perfect for this?</h1>
            <p>
                $1,000 Referral Bonus:  Know an athlete who meets our criteria?  Refer them and earn a cash bonus when they qualify!
            </p>
            <button className='custom-btn'>Request Details</button>
        </div>
    );
  };
  
  export default ReqestDetails;
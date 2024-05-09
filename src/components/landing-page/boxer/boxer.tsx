import React from 'react';
import boxerImage from '../../../static/images/boxer.png';
import './boxer.scss'


const Boxer: React.FC = () => {
    return (
      <div className="boxer-container">
        <div className="text-side">
          <p>
                Are you dedicated to your sport?  We're not just looking for the elite; we're looking for dedication and a commitment to health!  Whether you're a sprinter, swimmer, or soccer player, we want to hear from YOU!  Our unique program offers a remarkable opportunity to earn an income while staying fit and healthy.  And the best part?  You don't need to be a pro! 
          </p>
        </div>
        <div className="image-side">
          <img src={boxerImage} alt="boxer" /> 
        </div>
      </div>
    );
  };
  
  export default Boxer;
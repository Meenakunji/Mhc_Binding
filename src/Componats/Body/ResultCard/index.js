import React from 'react';
import './styles.css'; // You can create a CSS file for styling
import myImage from './tick.jpg'; 

const ResultCard = ({ content }) => {
  return (
    <div className="result-card">
      <div className="result-card-header">
        <div className="header-left">Results</div>
        <div className="header-right">
          {/* <span role="img" aria-label="checkmark">
            ✔️
          </span> */}
          {/* <img src='./tick.jpg' alt='tick'> */}
          <img src={myImage} alt="A landscape" width="39" height="53"/>

        </div>
      </div>
      {/* <hr className="faq-divider" /> */}
      <hr className='break_line'/>
      <div className="result-card-content">
        <div className='seq_style'>Sequence Display</div>
        <div className='seq2_style'>hsjk slwj klaksd pkm asd ksjjdaskda dnakdlaldadaskdjladmas.d askj dhgdjdj dnsjd jheuf djfheufg djfh</div>
      </div>
    </div>
  );
};

export default ResultCard;

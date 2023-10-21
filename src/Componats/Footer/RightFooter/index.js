import React from 'react';
import './rightfooter.css';
import EXPORT from './Icon.png';

class RightFooterCard extends React.Component {
  render() {
    return (
      <div className="right-footer-card">
        <div className="left-side">
          <h2>Sequence, alignment,peptides,mRNA</h2>
          <p>format: like CSV, FASTA,etc.</p>
        </div>
        <div className="right-side_box">
          <button className="blue-button"><div className='export_img'> <img src={EXPORT} alt='export'/> Export Now</div></button>
        </div>
      </div>
    );
  }
}

export default RightFooterCard;

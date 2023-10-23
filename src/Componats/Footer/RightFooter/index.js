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
          <button className="blue-button"><div className='export_img'> 
          
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
           <path d="M6.66675 9.99997L10.0001 13.3333M10.0001 13.3333L13.3334 9.99997M10.0001 13.3333V5.66664C10.0001 4.50771 10.0001 3.92825 9.54132 3.27947C9.2365 2.8484 8.3589 2.31637 7.83573 2.24549C7.04832 2.1388 6.74931 2.29479 6.15127 2.60675C3.48619 3.997 1.66675 6.78601 1.66675 9.99997C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99997C18.3334 6.91546 16.6576 4.22236 14.1667 2.78149" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
           Export Now</div></button>
        </div>
      </div>
    );
  }
}

export default RightFooterCard;

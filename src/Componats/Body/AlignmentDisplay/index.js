import React from 'react';
import './style.css'; 

const Alignment = ({ column1, column2, column3 }) => {
  return (
    <div className='Alignment_box'>
        <h2>Alignment Display</h2>
        <div className="alignment">
      <div className="alignment-column">
        <h2>Metric</h2>
        <p>Rfree</p>
        <p>Clashscore</p>
        <p>Ramachandran outliers</p>
        <p>SideChain outlier</p>
        <p>RSRZ outlitiers</p>
      </div>
      <div className="alignment-column">
        <h2>Percentile Ranks</h2>
        <p>.....</p>
        <p>.....</p>
        <p>.....</p>
        <p>.....</p>
        <p>.....</p>
      </div>
      <div className="alignment-column">
        <h2>Value</h2>
        <p>0.233</p>
        <p>10</p>
        <p>0.1%</p>
        <p>3.8%</p>
        <p>3.4%</p>
      </div>
    </div>
    </div>
  );
};

export default Alignment;

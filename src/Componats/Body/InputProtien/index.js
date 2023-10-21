import React, { useState } from 'react';
import './style.css'; // You can create a CSS file for styling

import IMG from './info-icon.png';
const CardProtien = ({onClickHandler}) => {
  const [proteinId, setProteinId] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initial dropdown value

  const handleProteinIdChange = (e) => {
    setProteinId(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="card">
      <p>Input Protien Structure</p>
      <div className="input-field">
        <label htmlFor="dropdown"  className= 'input_pro'>Protein IDs</label>
        <input
          type="text"
          id="proteinId"
          value={proteinId}
          placeholder='Insert Protien ID here'
          onChange={handleProteinIdChange}
          style={{ width: '94%' }}
        />
        {/* <option value="option 1">4V0R, 4V0Q, 5JJR</option> */}
          {/* <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option> */}
          {/* </select> */}
      </div>
      <div className="input-field">
        <label htmlFor="dropdown" className= 'input_pro'> <div className='alles' >Alleles <img src={IMG} alt='icon-info'/> </div></label>
        <input
          id="dropdown"
          value={selectedOption}
          placeholder='Choose your alleles'
          onChange={handleDropdownChange}
          style={{ width: '94%' }}
          className="custom-select"
        >

          </input>
           {/* <option className='option_class' value="" >Choose your alleles</option>
          <option value="option 1" selected>
            A*02:01, hla-a0101</option> */}
  
        {/* </select> */}
      </div>
      <div>
        <button class="analysis-button" onClick={onClickHandler}>Start The Analysis</button>
      </div>
    </div>
  );
};

export default CardProtien;

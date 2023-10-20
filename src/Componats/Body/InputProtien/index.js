import React, { useState } from 'react';
import './style.css'; // You can create a CSS file for styling

const CardProtien = ({onClickHandler}) => {
  const [proteinId, setProteinId] = useState('');
  const [selectedOption, setSelectedOption] = useState('Option 1'); // Initial dropdown value

  const handleProteinIdChange = (e) => {
    setProteinId(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="card">
      <h2>Input Protien Structure</h2>
      <div className="input-field">
        <label htmlFor="dropdown">Protein ID</label>
        <select
          type="text"
          id="proteinId"
          value={proteinId}
          placeholder='Insert ProtienId here'
          onChange={handleProteinIdChange}
          style={{ width: '97%' }}
        >
        <option value="option 1">4V0R, 4V0Q, 5JJR</option>
          {/* <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option> */}
          </select>
      </div>
      <div className="input-field">
        <label htmlFor="dropdown" className= 'input_pro'>Alleles</label>
        <select
          id="dropdown"
          value={selectedOption}
          placeholder='Choose your alleles'
          onChange={handleDropdownChange}
          style={{ width: '97%' }}
        >
          <option value="option 1">
            A*02:01, hla-a0101</option>
          {/* <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option> */}
        </select>
      </div>
      <div>
        <button class="analysis-button" onClick={onClickHandler}>Start The Analysis</button>
      </div>
    </div>
  );
};

export default CardProtien;

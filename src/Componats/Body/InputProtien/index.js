import React, { useState } from 'react';
import './style.css'; // You can create a CSS file for styling

import IMG from './info-icon.png';
const CardProtien = ({onClickHandler}) => {
  const [proteinId, setProteinId] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initial dropdown value
  const [inputError, setInputError] = useState(false);

  const handleProteinIdChange = (e) => {
    setProteinId(e.target.value);
    setInputError(false);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const onClickStartAnalysis = () => {
    if (proteinId.trim() === '') {
      setInputError(true);
    } else {
      setInputError(false); // Reset the input error if the input is not empty
      onClickHandler();
    }
  };

  return (
    <div className="card">
      <p>Input Protien Structure</p>
      <div className="input-first">
        <label className= 'input_pro'>Protein IDs</label>
        <input
          type="text"
          id="proteinId"
          value={proteinId}
          placeholder='Insert Protien ID here'
          onChange={handleProteinIdChange}
          style={{ width: '94%', color:'#9B9C9C' }}
        />
        {/* <option value="option 1">4V0R, 4V0Q, 5JJR</option> */}
          {/* <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option> */}
          {/* </select> */}
      </div>
      {inputError && <div className="error-message">Please enter a Protein ID.</div>}
      <div className="input-field">
        <label  className= 'input_pro'> <div className='alles' >Alleles
         <img src={IMG} alt='icon-info'/> 
         {/* <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 16, height: 16, left: 0, top: 1, position: 'absolute', background: 'white', borderRadius: 9999, border: '1px #AAAAAA solid'}} />
    <div style={{width: 15, height: 18, left: 6, top: 0, position: 'absolute', color: '#9B9C9C', fontSize: 11, fontFamily: 'Rockwell', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>i</div>
</div> */}
         </div></label>
        {/* <div className="custom-select"> */}
        <select
          // id="dropdown"
          value={selectedOption}
          placeholder='Choose your alleles'
          onChange={handleDropdownChange}
          style={{ width: '100%' }}
          
        >
         <option className='option_class' value="" >Choose your alleles</option>
          <option value="option 1">
            A*02:01, hla-a0101</option>
  
        </select>
        {/* </div> */}
      </div>
      <div style={{marginBottom:"20"}}>
        <button class="analysis-button" onClick={onClickStartAnalysis}>Start The Analysis</button>
      </div>
    </div>
  );
};

export default CardProtien;

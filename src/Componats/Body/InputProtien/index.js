import React, { useState, useContext } from 'react';
import DataContext from '../../../Context/DataContext';
import './style.css';

import IMG from './info-icon.png';
const CardProtien = ({onClickHandler}) => {
  const {setAlleles, setProteinIds} = useContext(DataContext);
  
  const [proteinId1, setProteinId1] = useState('');
  
  const [proteinId2, setProteinId2] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initial dropdown value
  const [inputError, setInputError] = useState(false);

  const handleProteinIdChange1 = (e) => {
    setProteinId1(e.target.value);
    setInputError(false);
  };
  const handleProteinIdChange2 = (e) => {
    setProteinId2(e.target.value);
    setInputError(false);
  };

  const handleDropdownChange = (e) => {
    
    setSelectedOption(e.target.value);
  };
  const onClickStartAnalysis = () => {
    if (proteinId1.trim() === '' || proteinId2.trim() === '') {

      setInputError(true);
    } else {
      setInputError(false); // Reset the input error if the input is not empty

      onClickHandler([proteinId1, proteinId2], selectedOption);

    }
  };

  return (
    <div className="card">
      <p>Input Protien IDs and Alleles
</p>
      <div className="input-first">
        <label className= 'input_pro'>First Protein ID</label>
        <input
          type="text"
          id="proteinId1"
          value={proteinId1}
          placeholder='Insert Protien ID here'
          onChange={handleProteinIdChange1}
          style={{ width: '94%', color:'#9B9C9C' }}
        />

        </div>

        <div className="input-first">

      <label className= 'input_pro'>Second Protein ID</label>
        <input
          type="text"
          id="proteinId2"
          value={proteinId2}
          placeholder='Insert Protien ID here'
          onChange={handleProteinIdChange2}
          style={{ width: '94%', color:'#9B9C9C' }}
        />
        </div>
       
        {inputError ? (
  <div className="error-message">Please enter a Protein ID
    {proteinId1 === '' && proteinId2 === '' ? '1 & 2' :
     proteinId1 === '' ? '1' :
     '2'
    }
  </div>
) : null}

      
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
         {/* <option className='option_class' value="" >Choose your alleles</option> */}
          <option value= {["A*02:01", "hla-a0101"]}>
            A*02:01, hla-a0101</option>
            <option value={["A*02:01", "hla-a0201"]}>
            A*02:01", "hla-a0201</option>
            <option value={["A*03:01", "hla-a0301"]}>
            A*03:01", "hla-a0301</option>
            <option value={["A*24:02", "hla-a2402"]}>
            A*24:02", "hla-a2402</option>
  
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

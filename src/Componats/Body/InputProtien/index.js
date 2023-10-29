import React, { useState, useContext, useEffect } from 'react';
import DataContext from '../../../Context/DataContext';
import './style.css';
import { Overlay, Tooltip } from 'react-bootstrap'; 
import IMG from './info-icon.png';
import Loading from '../Loader/loader';
const CardProtien = ({onClickHandler}) => {


  const {setAlleles, setProteinIds} = useContext(DataContext);

  
  const [proteinId1, setProteinId1] = useState('');
  
  const [proteinId2, setProteinId2] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initial dropdown value
  const [inputError, setInputError] = useState(false);
  const [proteinData, setProteinData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dropdown1, SetDropdown1] = useState(false);
  const [dropdown2, SetDropdown2] = useState(false);


  const handleProteinIdChange1 = (data) => {
    setProteinId1(data);
    setInputError(false);
    if(data){
    fetchData(data);
     SetDropdown1(true);
    } else{
      SetDropdown1(false);
    }
  };
  const handleProteinIdChange2 = (data) => {
    setProteinId2(data);
    setInputError(false);

    if(data){
      fetchData(data);
       SetDropdown2(true);
      } else{
        SetDropdown2(false);
      }
  

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

  // useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async (proteinId) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://app.prepaire.com:5067/backendRequests/proteins/pdbs?criteria=${proteinId}`
        );

        if (response.ok) {
          const data = await response.json();
          // if(data.item.length) SetDropdown(true);
          setProteinData(data.items);

        } else {
          // Handle errors here
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally{
        setLoading(false);
      }
    };

    // fetchData();
  // }, []);

  return (
    <div className="card">
      <p>Input Protien IDs and Alleles</p>
      <div className="input-first">
        <label className= 'input_pro'>First Protein Name</label>
        <input
          type="text"
          id="proteinId1"
          value={proteinId1}
          placeholder='Insert Protien ID here'
          onChange=  { (e)=> {handleProteinIdChange1(e?.target?.value)}}
          list="proteinIdSuggestions1"
          style={{ width: '94%', color:'#9B9C9C' }}
        />
         {/* <datalist id="proteinIdSuggestions1" className='proteinId_suggest'> */}
        {dropdown1 &&<div className='input_pro_box_1'>
          {loading? <Loading/> :
  proteinData.map((suggestion, index) => (
    <div key={suggestion.id} className='sugeestion_box'>
      {suggestion.pdbs.map((item) => (
        <div key={item.id}>
        <li value={item.id} onClick={()=>{setProteinId1(item.id); SetDropdown1(false)}}>
          {item.id}
           <br/>
           {suggestion.name}
          </li>
          <hr className="faq-divider" />
           </div>
        
      ))}
    </div>
  ))
      }
      </div>
}
{/* </datalist> */}
        </div>


        <div className="input-first">

      <label className= 'input_pro'>Second Protein Name</label>
        <input
          type="text"
          id="proteinId2"
          value={proteinId2}
          placeholder='Insert Protien ID here'
          onChange={(e)=>{handleProteinIdChange2(e.target.value)} }
          list="proteinIdSuggestions2"
          style={{ width: '94%', color:'#9B9C9C' }}
        />
         
         {dropdown2 &&<div className='input_pro_box_1'>
          {loading? <Loading/> :
  proteinData.map((suggestion, index) => (
    <div key={suggestion.id} className='sugeestion_box'>
      {suggestion.pdbs.map((item) => (
        <div key={item.id}>
        <li value={item.id} onClick={()=>{setProteinId2(item.id); SetDropdown2(false)}}>
          {item.id}
           <br/>
           {suggestion.name}
          </li>
          <hr className="faq-divider" />
           </div>
        
      ))}
    </div>
  ))
      }
      </div>
}
          
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

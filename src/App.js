import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
// import './font.css';
// import './Fonts/Inter-3.19/Inter Hinted for Windows/Web/inter.css';
import './Inter-3.19/Inter Hinted for Windows/Web/inter.css';

import Header from './Componats/Header';
import CardProtien from './Componats/Body/InputProtien';
import ProcessingComponent from './Componats/Body/Processing';
import ResultCard from './Componats/Body/ResultCard';
import Alignment from './Componats/Body/AlignmentDisplay';
import FaqCard from './Componats/Body/Faq';
import Card3D from './Componats/Body/ThreeDStruct';
import CardProtienStruct from './Componats/Body/ProtienStruct';
import LeftFooterCard from './Componats/Footer/Leftfooter';
import RightFooterCard from './Componats/Footer/RightFooter';
import Temp from './Componats/Temp';
import MolculeView from './Componats/Molucule';
import DataContext from './Context/DataContext';
function App() {

  const [alignedSeq, setAlignedSeq] = useState("Sample Sequence");

  const [alleles, setAlleles] = useState(null);
  const [proteinIds, setProteinIds] = useState(null);

  const childRef = useRef();
  const onClickHandler = (protein_ids, alleles) => {
    
    childRef.current.fetchData(protein_ids, alleles);
    // console.log('kunj', protein_ids);
    handleAlignedSeq();
};

const handleAlignedSeq = (data) => {

  setAlignedSeq(data);
  
  // Now you have your alignedSeq data in your parent component, you can set it to the state or do anything else
};

  return (
    <DataContext.Provider value={{alleles , setAlleles, proteinIds , setProteinIds }}>
      
     <div className='Conatiner'>
   
     <div className='body'>
      <p style={{ fontFamily: 'Inter' }}>Binding Analaysis Tool</p>
      <div className='body_box'>
        <div className='body_box_left'>
          <div className='card_box_x'><CardProtien onClickHandler = {onClickHandler}/></div>
          <div className='card_box_x' > <ResultCard alignedSeq = {alignedSeq}  /></div>
          <div className='card_box_x'>  <FaqCard/> </div>
        </div>
        <div className='body_box_right'>
          <MolculeView ref={childRef} onAlignedSeq={handleAlignedSeq}/>
        </div>
       
      
      </div>
   </div>
     {/* <div className='footer'>
     <LeftFooterCard/>
     <RightFooterCard/>
     </div> */}
     
  </div>
  </DataContext.Provider>
  );
}

export default App;

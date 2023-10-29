import React, { useState } from 'react';
import './style.css'; 

const FaqCard = () => {

  const [row1, setRow1] = useState(false);
  const [row2, setRow2] = useState(false);
  const [row3, setRow3] = useState(false);
  const [row4, setRow4] = useState(false);
  const [row5, setRow5] = useState(false);
  const [row6, setRow6] = useState(false);
  return (
    <div className="faq-card">
      <h4 className='faq-heading'>FAQ</h4>
      <div className="faq-row">
        <p onClick={()=>setRow1(!row1)}>What is the primary function of the Binding Analysis Tool?</p>
        { row1?<p> The Binding Analysis Tool is a comprehensive platform designed to fetch protein sequences 
          from the RCSB PDB, align these sequences to pinpoint similarities, predict peptide binding to MHC alleles 
          using MHCflurry, back-translate peptides into mRNA sequences with dnachisel, and offer 3D visualization 
          of protein structures, emphasizing specific peptides with py3Dmol. This tool is pivotal for mRNA development
           for various alleles and virus protein sequences, enhancing vaccine research.
        </p> : null}
       
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow2(!row2)}>How does the Binding Analysis Tool interface with the RCSB PDB database?</p>
        {row2?<p>The Binding Analysis Tool seamlessly integrates with the RCSB PDB database, allowing users to directly 
          fetch the most recent protein sequences. This ensures that users always work with the latest protein data for their 
          binding analyses.
</p>:null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow3(!row3)}>In the context of vaccine development, how is the sequence alignment feature of the Binding Analysis Tool beneficial?</p>
        {row3? <p>The sequence alignment feature in the Binding Analysis Tool identifies conserved regions and similarities across diverse proteins. These conserved 
          domains can be pivotal in vaccine development as they might be vital for the pathogen's function and are less prone to mutations.
</p>:null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow4(!row4)}>Can I utilize the Binding Analysis Tool to predict the interaction of specific peptides with a range of MHC alleles?</p>
        {row4? <p>Absolutely! The Binding Analysis Tool employs MHCflurry to forecast the binding affinity of peptides to a variety of MHC alleles. This predictive 
          capability aids researchers in deciphering potential immune responses and in crafting peptides that can trigger robust immune reactions.</p>: null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow5(!row5)}>How does the feature of back-translating to mRNA sequences in the Binding Analysis Tool contribute to vaccine research?</p>
        {row5?<p>After identifying promising peptide targets, the Binding Analysis Tool can back-translate these peptides into mRNA sequences using dnachisel. These 
          mRNA sequences can subsequently be synthesized and utilized in mRNA-based vaccines, offering a swift and adaptive response to emerging viral challenges.</p>:null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow6(!row6)}>How can I employ the Binding Analysis Tool for 3D visualization of proteins and to spotlight specific peptides?</p>
        {row6? <p>The Binding Analysis Tool integrates py3Dmol for an immersive 3D visualization experience of protein structures. Users can interactively zoom, 
          pan, and rotate these structures. Moreover, specific peptides of interest are vividly highlighted, enabling researchers to visually assess their spatial arrangement, 
          orientation, and interactions within the protein.</p>:null}
      </div>
      <hr className="faq-divider" />
      
    </div>
  );
};

export default FaqCard;

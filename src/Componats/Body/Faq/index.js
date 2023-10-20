import React, { useState } from 'react';
import './style.css'; // You can create a CSS file for styling

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
        <p onClick={()=>setRow1(!row1)}>What is the first question?</p>
        { row1?<p>This is the answer to the first question.</p> : null}
       
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow2(!row2)}> What is the second question?</p>
        {row2?<p>This is the answer to the second question.</p>:null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow3(!row3)}>What is the third question?</p>
        {row3? <p>This is the answer to the third question.</p>:null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow4(!row4)}> What is the fourth question?</p>
        {row4? <p>This is the answer to the fourth question.</p>: null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow5(!row5)}>What is the fifth question?</p>
        {row5?<p>This is the answer to the fifth question.</p>:null}
      </div>
      <hr className="faq-divider" />
      <div className="faq-row">
        <p onClick={()=>setRow6(!row6)}>What is the sixth question?</p>
        {row6? <p>This is the answer to the sixth question.</p>:null}
      </div>
      <hr className="faq-divider" />
      
    </div>
  );
};

export default FaqCard;

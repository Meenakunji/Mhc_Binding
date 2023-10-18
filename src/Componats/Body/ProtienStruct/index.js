import React from 'react';
import './style.css'; // You can create a CSS file for styling
import myImage from './protein.png';
const CardProtienStruct = () => {
  return (
    <div className="card-Protien">
     
        <h2>Protien Structure with Peptides Higlighted</h2>
        <img src={myImage} alt='Protien_image'/>
     
    </div>
  );
};

export default CardProtienStruct;

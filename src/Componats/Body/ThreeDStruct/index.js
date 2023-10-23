import React from 'react';
import './style.css'; 
import myImage from './protein.png';
const Card3D = () => {
  return (
    <div className="card-3d">
     
        <h2>Original Protien 3d Structure</h2>
        <img src={myImage} alt='Protien-image'/>
   
    </div>
  );
};

export default Card3D;

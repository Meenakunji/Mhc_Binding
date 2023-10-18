import React from 'react';
import './style.css'; 
// import Dropdown from './Dropdown'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        {/* <img
          src="/path-to-your-company-logo.png"
          alt="Prepaire"
          className="header__logo"
        /> */}
        <h3>Prepaire</h3>
        <ul className="header__items">
          <li className="header__item">App Store</li>
          <li className="header__item">Search</li>
          <li className="header__item">Hailo</li>
          <li className="header__item">Vaccine</li>
          <li className="header__item">Pharmacogenomics</li>
          <li className="header__item">My tools</li>
        </ul>
      </div>
      <div className="header__right">
      
        
            <p className="header__item">Prepaire Shield</p>
            {/* <Dropdown /> */}
        
        <img
          src="https://isbscience.org/wp-content/uploads/Andrew-Magis.png"
          alt="Profile Icon"
          className="header__profile-icon"
        />
      </div>
    </header>
  );
};

export default Header;

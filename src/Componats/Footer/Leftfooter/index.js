import React from 'react';

import  './style.css';

class LeftFooterCard extends React.Component {
  render() {
    return (
      <div className="left-footer-card">
        <div className="left-side_box">
          <h2>You might also find useful these apps</h2>
        </div>
        <div className="right-side">
          <img src="image1.jpg" alt="App Name" />
          <img src="image2.jpg" alt="App Name" />
          <img src="image3.jpg" alt="App Name" />
        </div>
      </div>
    );
  }
}

export default LeftFooterCard;

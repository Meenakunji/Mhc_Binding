import React from "react";
import LOADING_IMG from './logo.svg'

import './loader.css'

function Loading() {
    return(
      <div className="loading-animation-wrapper">
        <img alt="loading icon" src={LOADING_IMG}/>
      </div>
    );
}

export default Loading;
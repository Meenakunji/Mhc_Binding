import React from "react";
import "./styles.css"; 
import myImage from "./tick.png";

const ResultCard = ({ content, alignedSeq }) => {

  return (
    <div className="result-card">
      <div className="container">
        <div className="result-card-header">
          <div className="header-left">Results</div>
          <div className="header-right">
           
           
            <img src={myImage} alt="A landscape" width="39" height="53" />
           
          </div>
        </div>
       
        <hr className="break_line" />
        <div className="result-card-content">
          <div className="seq_style"> Aligned Sequence Display</div>
          <div className="seq2_style" style={{ width: "300px" }}>
           {alignedSeq? <div  className="seq2_alignSeq" style={{ whiteSpace: "pre-wrap" }}> 
          
           {alignedSeq.replace(/(.{35})/g, "$1\n")}
            </div> 
           : "Run the Application to see the Results"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

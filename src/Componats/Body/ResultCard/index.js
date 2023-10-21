import React from "react";
import "./styles.css"; // You can create a CSS file for styling
import myImage from "./tick.png";

const ResultCard = ({ content }) => {
  return (
    <div className="result-card">
      <div className="container">
        <div className="result-card-header">
          <div className="header-left">Results</div>
          <div className="header-right">
            {/* <span role="img" aria-label="checkmark">
            ✔️
          </span> */}
            {/* <img src='./tick.jpg' alt='tick'> */}
            <img src={myImage} alt="A landscape" width="39" height="53" />
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="39" height="53" viewBox="0 0 39 53" fill="none">
              <path d="M25.219 33.1731C25.6083 33.0295 26.0517 33.2276 26.1934 33.6407C26.335 34.0363 26.1404 34.4857 25.7501 34.6293C24.9173 34.9353 24.0668 35.1866 23.1981 35.3305C22.3123 35.4925 21.4265 35.5822 20.5583 35.5822C16.4463 35.5822 12.7069 33.8921 10.0132 31.1599C7.31983 28.4276 5.6543 24.6343 5.6543 20.4643C5.6543 16.2936 7.31983 12.5185 10.0132 9.78595C12.7069 7.05401 16.4463 5.34637 20.5583 5.34637C24.6693 5.34637 28.3906 7.05394 31.0842 9.78595C33.7784 12.5185 35.4439 16.2936 35.4439 20.4643C35.4439 20.8955 35.1069 21.2373 34.6821 21.2373C34.2565 21.2373 33.9201 20.8955 33.9201 20.4643C33.9201 16.7249 32.4316 13.3279 30.0036 10.8827C27.5932 8.41991 24.2439 6.90986 20.5583 6.90986C16.8717 6.90986 13.5225 8.41998 11.0946 10.8827C8.68491 13.3279 7.19581 16.7249 7.19581 20.4643C7.19581 24.203 8.68491 27.6007 11.0946 30.0631C13.5226 32.508 16.8718 34.0181 20.5583 34.0181C21.3555 34.0181 22.1529 33.9464 22.9149 33.8204C23.6945 33.6764 24.4742 33.4611 25.219 33.1731Z" fill="#414D55"/>
              <path d="M32.5205 26.504C32.7157 26.1269 33.1762 25.9646 33.5485 26.1626C33.921 26.3422 34.0803 26.8099 33.8856 27.2051C33.3008 28.4094 32.5559 29.5065 31.6877 30.5126C30.8196 31.5019 29.8097 32.3823 28.7108 33.1192C28.3562 33.3531 27.8781 33.2452 27.6473 32.886C27.4171 32.5262 27.5233 32.0586 27.8781 31.8071C28.8702 31.16 29.7561 30.3691 30.5533 29.4702C31.3337 28.5893 31.9894 27.5828 32.5205 26.504Z" fill="#414D55"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3086 24.4008C34.7166 24.4008 35.0528 24.0594 35.0528 23.6457C35.0528 23.2326 34.7165 22.891 34.3086 22.891C33.9007 22.891 33.5645 23.2326 33.5645 23.6457C33.5645 24.0594 33.9007 24.4008 34.3086 24.4008Z" fill="#414D55"/>
              <path d="M11.3241 21.0573C10.5445 20.1766 10.6161 18.8102 11.4842 18.0194C12.3523 17.2283 13.6991 17.3004 14.4787 18.1812L18.2713 22.4776L26.6891 13.8309C27.5217 12.9681 28.851 12.9681 29.6836 13.7949C30.5345 14.6217 30.5345 15.9884 29.7192 16.8328L19.7067 27.1152C19.6712 27.1513 19.6359 27.1873 19.6003 27.2052C18.7323 27.9963 17.4033 27.9242 16.6235 27.0434L11.3241 21.0573Z" fill="#414D55"/>
            </svg> */}
          </div>
        </div>
        {/* <hr className="faq-divider" /> */}
        <hr className="break_line" />
        <div className="result-card-content">
          <div className="seq_style">Sequence Display</div>
          <div className="seq2_style">
            hsjk slwj klaksd pkm asd ksjjdaskda dnakdlaldadaskdjladmas.d askj
            dhgdjdj dnsjd jheuf djfheufg djfh DJHDJ  EJIK3E 3RJ3 dnijoe kedjiej dkdeokdpwd www
            whdjwjd wdwjdw wjdnubdv
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

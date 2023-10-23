import React, { useState, useEffect } from 'react';
import './style.css'; 

const ProcessingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
  });

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
      setData({
        field1: 'Data 1',
        field2: 'Data 2',
        field3: 'Data 3',
        field4: 'Data 4',
        field5: 'Data 5',
        field6: 'Data 6',
      });
    }, 5000); 
  }, []);

  return (
    <div className="processing-component">
      {isLoading ? (
        <div className="loader">Processing...</div>
        // <Loader />
      ) : (
        <div>
          <div className="data-field">Field 1: {data.field1}</div>
          <div className="data-field">Field 2: {data.field2}</div>
          <div className="data-field">Field 3: {data.field3}</div>
          <div className="data-field">Field 4: {data.field4}</div>
          <div className="data-field">Field 5: {data.field5}</div>
          <div className="data-field">Field 6: {data.field6}</div>
        </div>
      )}
    </div>
  );
};

export default ProcessingComponent;

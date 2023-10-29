import React from 'react';

const ProteinSuggestionList = ({ proteinData, handleSuggestionClick }) => {
  return (
    <div className="suggestion-list">
      {proteinData.map((suggestion, index) => (
        <div key={suggestion.id}>
          {suggestion.pdbs.map((item) => (
            <div key={item.id} onClick={() => handleSuggestionClick(item.id)}>
              {suggestion.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProteinSuggestionList;

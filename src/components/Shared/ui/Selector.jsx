import React from 'react';
import '../../../styles/Selector.css';

function Selector({ item, onClick, setLanguage }) {
  const handleLanguageSelection = (language) => {
    setLanguage(language);
    onClick();
  };

  return (
    <div className="selector">
      <div className="selector-container">
        <h3>Select Language <i className='fa-solid fa-xmark fa-xs' onClick={onClick}></i></h3>
        {item.language.split('/').map((language, index) => (
          <p 
            className='selector-item' 
            key={index} 
            onClick={() => handleLanguageSelection(language)}
          >
            {language}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Selector;
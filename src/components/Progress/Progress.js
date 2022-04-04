import React from 'react';
import './Progress.css';

const Progress = () => {
  return (
    <div className='progress'>
      <p className='progress__text'><strong>Вопрос 1</strong> из 4</p>
      <div className="progress__bar-outer">
        <div className="progress__bar-inner"></div>
      </div>
    </div>
  );
};

export default Progress;
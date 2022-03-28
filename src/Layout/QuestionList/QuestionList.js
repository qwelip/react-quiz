import React from 'react';
import './QuestionList.css';

const QuestionList = (props) => {
  return (
    <div className='question-list'>
      <h1 className='question-list__header'>Укажите параметры вашего помещения</h1>
      <div className="question-list__separator"></div>
      <div className="question-list__options">
        {props.children}
      </div>
    </div>
  );
};

export default QuestionList;
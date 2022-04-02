import React from 'react';
import { useSelector } from 'react-redux';
import './QuestionList.css';

const QuestionList = (props) => {

  const {listPosition} = useSelector(store => store.state);

  return (
    <div className={ props.number === listPosition ? 'question-list question-list_visible' : 'question-list'}>
      <h1 className='question-list__header'>{props.title}</h1>
      <div className="question-list__separator"></div>
      <div className="question-list__options">
        {props.children}
      </div>
    </div>
  );
};

export default QuestionList;
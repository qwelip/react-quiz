import React from 'react';
import QuestionList from '../QuestionList/QuestionList';
import './Quiz.css';

const Quiz = () => {
  return (
    <section className='quiz'>
      <div className="quiz__left-side">
        <QuestionList>
          
        </QuestionList>
      </div>

      <div className="quiz__right-side">
        <div className="quiz__wrapper">

        </div>
      </div>
    </section>
  );
};

export default Quiz;
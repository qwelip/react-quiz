import React from 'react';
import QuestionList from '../QuestionList/QuestionList';
import Range from '../../components/Range/Range';
import './Quiz.css';

const Quiz = () => {
  return (
    <section className='quiz'>
      <div className="quiz__left-side">
        <QuestionList>
          <Range/>
          <Range/>
          <Range/>
          <Range/>
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
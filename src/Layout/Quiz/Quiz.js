import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Quiz.css';

import QuestionList from '../QuestionList/QuestionList';
import Range from '../../components/Range/Range';
import Radio from '../../components/Radio/Radio';

import { goForward, goBack } from '../../store/state/state-action';

import oboi from '../../images/oboi.png';
import kraska from '../../images/kraska.png';
import plitka from '../../images/plitka.png';
import shtukaturka from '../../images/shtukaturka.png';

const NUMBER_OF_SLIDES = 4;

const Quiz = () => {

  const dispatch = useDispatch();
  const {listPosition} = useSelector(store => store.state);

  return (
    <section className='quiz'>
      <button onClick={() => listPosition < NUMBER_OF_SLIDES && dispatch(goForward())} >+</button>
      <button onClick={() => listPosition > 1 && dispatch(goBack())} >-</button>
      <div className="quiz__left-side">
        <QuestionList
          title="Укажите параметры вашего помещения"
          number={1}
        >
          <Range
            title="Количество углов"
            measure="шт."
            qty={40}
          />
          <Range
            title="Колличество труб"
            measure="шт."
            qty={16}
          />
          <Range
            title="Площадь помещения"
            measure="кв/м"
            qty={100}
          />
          <Range
            title="Точек освещения"
            measure="шт."
            qty={16}
          />
        </QuestionList>

        <QuestionList
          title="Укажите отделку стен квартиры"
          number={2}
        >
          <div className="flex-row">
            <Radio
              id="radio1"
              value="plitca"
              text="Плитка"
              imgSrc={plitka}
            />

            <Radio
              id="radio2"
              value="chtucaturca"
              text="Штукатурка"
              imgSrc={shtukaturka}
            />
          </div>

          <div className="flex-row">
            <Radio
              id="radio3"
              value="oboi"
              text="Обои"
              imgSrc={oboi}
            />

            <Radio
              id="radio4"
              value="kraska"
              text="Краска"
              imgSrc={kraska}
            />
          </div>
        </QuestionList>

        <QuestionList
          title="Какой потолок вы планируете"
          number={3}
        >

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
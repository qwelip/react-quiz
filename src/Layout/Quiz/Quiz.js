import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Quiz.css';

import QuestionList from '../QuestionList/QuestionList';
import Range from '../../components/Range/Range';
import RadioWithImg from '../../components/RadioWithImg/RadioWithImg';
import Radio from '../../components/Radio/Radio';
import Input from '../../components/Input/Input';

import { goForward, goBack } from '../../store/state/state-action';

import oboi from '../../images/oboi.png';
import kraska from '../../images/kraska.png';
import plitka from '../../images/plitka.png';
import shtukaturka from '../../images/shtukaturka.png';
import personeIco from '../../images/persone-ico.png';
import telIco from '../../images/tel-ico.png';
import bullet from '../../images/bullet.ong';

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
            <RadioWithImg
              id="radio1"
              value="plitca"
              text="Плитка"
              imgSrc={plitka}
            />

            <RadioWithImg
              id="radio2"
              value="chtucaturca"
              text="Штукатурка"
              imgSrc={shtukaturka}
            />
          </div>

          <div className="flex-row">
            <RadioWithImg
              id="radio3"
              value="oboi"
              text="Обои"
              imgSrc={oboi}
            />

            <RadioWithImg
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
          <div className="flex-row">
            <Radio
              id="radio5"
              value="oboi"
              text="Обои"
            />

            <Radio
              id="radio6"
              value="fotopechat"
              text="Фотопечать"
            />
          </div>
          <div className="flex-row">
          <Radio
              id="radio7"
              value="satinoviy"
              text="Сатиновый"
            />

            <Radio
              id="radio8"
              value="disaynersky"
              text="Дизайнерский"
            />
          </div>
          <div className="flex-row">
            <Radio
              id="radio9"
              value="matoviy"
              text="Матовый"
            />

            <Radio
              id="radio10"
              value="mnogoyrovnevyi"
              text="Многоуровневый"
            />
          </div>
        </QuestionList>

        <QuestionList
          title="Заполните Ваши данные"
          number={4}
        >
          <Input
            img={personeIco}
            placeholder="Ваше имя"
            type="text"
          />
          <Input
            img={telIco}
            placeholder="Ваш телефон"
            type="tel"
          />
        </QuestionList>
      </div>

      <div className="quiz__right-side">
        <div className="quiz__wrapper">
          <ul className='quiz__bullets'>
            <li className='quiz__bullet'>
              <img className='quiz__bullet-img' src={bullet} alt="Иконка буллета" />
              <p className='quiz__bullet-text'>Бесплатный выезд замерщика</p>
            </li>
            <li className='quiz__bullet'>
              <img className='quiz__bullet-img' src={bullet} alt="Иконка буллета" />
              <p className='quiz__bullet-text'>Экологичные, безопасные материалы</p>
            </li>
            <li className='quiz__bullet'>
              <img className='quiz__bullet-img' src={bullet} alt="Иконка буллета" />
              <p className='quiz__bullet-text'>Профессиональные монтажники</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
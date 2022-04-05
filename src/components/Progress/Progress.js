import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NUMBER_OF_SLIDES } from '../../Layout/Quiz/Quiz';
import './Progress.css';

const Progress = () => {

  const {listPosition} = useSelector(state => state.state);
  const progress = useRef(1);
  const bar = useRef(null);

  const calcPosition = (num) => {
    const presetnPos = -bar.current.style.left.slice(1, -2);
    const resPos = presetnPos + num;
    return `${resPos}px`
  }

  useEffect(() => {
    if (!bar.current.style.left) {
      bar.current.style.left = `${-bar.current.offsetWidth}px`;
      bar.current.step = +bar.current.style.left.slice(1, -2)/(NUMBER_OF_SLIDES - 1);
    } else {
      if (progress.current < listPosition) {
        progress.current += 1;
        bar.current.style.left = calcPosition(bar.current.step)
      } else {
        progress.current -= 1;
        bar.current.style.left = calcPosition(-bar.current.step)
      }
    }
  }, [listPosition])

  return (
    <div className='progress'>
      <p className='progress__text'><strong>Вопрос {listPosition}</strong> из {NUMBER_OF_SLIDES}</p>
      <div className="progress__bar-outer">
        <div ref={bar} className='progress__bar-inner'></div>
      </div>
    </div>
  );
};

export default Progress;
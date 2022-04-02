import React from 'react';
import './Radio.css';

const Radio = ({id, value, text, imgSrc, className, type, name}) => {
  return (
    <>
      <input id={id} className={className} type={type} name={name} value={value}/>
      <label className='label' htmlFor={id}>
        <div className="label__container">
          <div className="label__indicator"></div>
          <div className="label__img-wrapper">
            <img className='label__img' src={imgSrc} alt={text} />
          </div>
          <p className='label__title'>{text}</p>
        </div>
      </label>
    </>
  );
};

Radio.defaultProps = {
  className: 'custom-checkbox', 
  type: "radio", 
  name: "radioInput"
}

export default Radio;
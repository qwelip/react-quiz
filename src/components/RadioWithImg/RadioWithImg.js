import React from 'react';
import './RadioWithImg.css';

const RadioWithImg = ({id, value, text, imgSrc, className, type, name}) => {
  return (
    <>
      <input id={id} className={className} type={type} name={name} value={value}/>
      <label className='label' htmlFor={id}>
        <div className="radio-img__container">
          <div className="radio-img__indicator"></div>
          <div className="radio-img__img-wrapper">
            <img className='radio-img__img' src={imgSrc} alt={text} />
          </div>
          <p className='radio-img__title'>{text}</p>
        </div>
      </label>
    </>
  );
};

RadioWithImg.defaultProps = {
  className: 'custom-checkbox', 
  type: "radio", 
  name: "radioImg"
}

export default RadioWithImg;
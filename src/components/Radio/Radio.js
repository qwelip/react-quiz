import React from 'react';
import './Radio.css';

const Radio = ({id, value, text, className, type, name}) => {
  return (
    <>
      <input id={id} className={className} type={type} name={name} value={value}/>
      <label className='label' htmlFor={id}>
        <div className="radio">
          <div className="radio__indicator"></div>
          <p className='radio__title'>{text}</p>
        </div>
      </label>
    </>
  );
};

Radio.defaultProps = {
  className: 'custom-checkbox', 
  type: "radio", 
  name: "radio"
}

export default Radio;
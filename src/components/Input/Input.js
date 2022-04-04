import React from 'react';
import './Input.css';

const Input = ({placeholder, type, img}) => {
  return (
    <div className="input">
      <img className={ type === 'text' ? 'input__icon input__icon_persone' : 'input__icon'} src={img} alt="Иконка" />
      <input className='input__field' placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
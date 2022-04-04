import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../store/state/state-action';
import './Input.css';

const Input = ({placeholder, type, img}) => {

  const {contakty} = useSelector(state => state.state);
  const dispatch = useDispatch();

  const fieldType = type === 'text' ? "name" : "tel";

  const handleChancge = (e) => {
    dispatch(setContacts([fieldType, e.target.value]))
  }

  return (
    <div className="input">
      <img 
        className={ type === 'text' ? 'input__icon input__icon_persone' : 'input__icon'} 
        src={img} 
        alt="Иконка" 
      />
      <input 
        value={contakty[fieldType]}
        onChange={handleChancge}
        className='input__field' 
        placeholder={placeholder} 
        type={type} 
      />
    </div>
  );
};

export default Input;
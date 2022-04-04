import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPotoloc } from '../../store/state/state-action';
import './Radio.css';

const Radio = ({id, value, text, className, type, name}) => {

  const {potoloc} = useSelector(state => state.state);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setPotoloc(value))
  }

  return (
    <>
      <input 
        checked={value === potoloc}
        onChange={handleChange}
        id={id} 
        className={className} 
        type={type} 
        name={name} 
        value={value}
      />
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
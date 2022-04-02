import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { StyledEngineProvider } from '@mui/material/styles';
import './Range.css';

const Range = ({title, measure, qty}) => {

  const marks = [
    {
      value: 0,
      label: `0 ${measure}`
    },
    {
      value: qty / 4,
      label: `${Math.floor(qty / 3)} ${measure}`
    },
    {
      value: 2*qty / 4,
      label: `${Math.floor(2*qty / 4)} ${measure}`
    },
    {
      value: 3*qty / 4,
      label: `${Math.floor(3*qty / 4)} ${measure}`
    },
    {
      value: qty,
      label: `${qty} ${measure}`
    }
  ];

  return (
    <div className="range">

      <div className="range__header">
        <h2 className='range__title'>{title}</h2>
        <div className="range__counter">
          <p className='range__number'>100</p>
        </div>
      </div>

      <Box width={450}>
        <StyledEngineProvider injectFirst>
          <Slider 
            defaultValue={0} 
            step={1}
            min={0}
            max={qty}
            marks={marks}
          />
        </StyledEngineProvider>
      </Box>
    </div>
  );
};

export default Range;
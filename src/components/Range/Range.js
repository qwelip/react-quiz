import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { StyledEngineProvider } from '@mui/material/styles';
import './Range.css';

const Range = () => {

  const marks = [
    {
      value: 0,
      label: '0 шт',
    },
    {
      value: 10,
      label: '10 шт',
    },
    {
      value: 20,
      label: '20 шт',
    },
    {
      value: 30,
      label: '30 шт',
    },
  ];

  return (
    <div className="range">

      <div className="range__header">
        <h2 className='range__title'>Количество углов</h2>
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
            max={30}
            marks={marks}
          />
        </StyledEngineProvider>
      </Box>
    </div>
  );
};

export default Range;
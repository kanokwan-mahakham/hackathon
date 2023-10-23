import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slider = ({ className, value, onValueChange }) => {
  // Local state for the slider's value
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className={className}>
      <input
        type="range"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <div id="amount">
        $ {sliderValue},000
      </div>
    </div>
  );
};


export default styled(Slider)`
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type="range"] {
    width: 100%;
  }

  #amount {
    font-family: 'Exo', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: #37dd37;
  }
`;

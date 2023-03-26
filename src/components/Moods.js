import React from 'react';
import styled from 'styled-components';

function Moods() {
  return (
    <CurrentMoods type="text" placeholder="I am feeling..." />
  );
}
export default Moods;

const CurrentMoods = styled.input`
    font-family: Arial;
    padding: 12px;
    box-shadow: 5px 5px 5px grey;
`
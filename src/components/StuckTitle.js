import React from 'react';
import styled from 'styled-components';

function StuckTitle() {
  return (
    <>
    <CoolH1>Let's Track Your Mood</CoolH1>
    </>
  );
}

export default StuckTitle;

const CoolH1 = styled.h1`
  background-color: #A2ABCE;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #000000;
`
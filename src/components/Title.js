import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <>
    <CoolH1>Let's Track Your Mood</CoolH1>
    </>
  );
}

export default Title;

const CoolH1 = styled.h1`
background-color: #A47551;
font-family: Monospace;
padding: 16px;
font-size: 45px;
text-transform: uppercase;
text-align: center;
`
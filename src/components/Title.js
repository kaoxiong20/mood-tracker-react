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
background-color: #847C7A;
font-family: 'Permanent Marker', cursive;
padding: 16px;
font-size: 45px;
text-transform: uppercase;
`
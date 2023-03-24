import React from 'react';
import styled from 'styled-components';

function Body() {
    return (
      <>
      <Subtitle>How are you <u>currently</u> feeling?</Subtitle>
      </>
    );
  }

  export default Body;
  
  const Subtitle = styled.h2`
  font-size: 15px;
  font-family: Roboto;
  `
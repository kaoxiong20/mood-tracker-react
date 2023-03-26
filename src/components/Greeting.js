import React from 'react';
import styled from 'styled-components';

const Greeting = (props) => {
    return <StyledGreeting>Hello, {props.name}!</StyledGreeting>;
  }

//   Ask for help in setting up names //

  export default Greeting;

  const StyledGreeting = styled.h1`
    text-align: center;  
  `
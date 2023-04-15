import React from 'react';
import styled from 'styled-components';


function Header () {
    return (
      <>
      <Subtitle>How are you feeling?</Subtitle>
      </>
    );
  }

export default Header;

const Subtitle = styled.h3`
  font-size: 20px;
  background-color: #A2ABCE;
  padding: 20px 30px 20px 30px;
  text-align: center;
  margin: auto;
  width: 400px;
  text-transform: uppercase;
`
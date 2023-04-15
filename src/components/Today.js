import React from 'react';
import NewInput from './NewInput';
import styled from 'styled-components';

const Today = () => (
  <div className="main-content">
    <br/>
    <StyledH2>Today's Mood Entries</StyledH2>
    <StyledP>Enter your entries for today's mood.</StyledP>
    <StyledP>Think about: Who? What? Where? Why?</StyledP>
    <StyledP>Where does this stem from?</StyledP>
    <NewInput />
  </div>
);

export default Today;

const StyledH2 = styled.h2`
    font-size: 20px;
    background-color: #A2ABCE;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
    text-transform: uppercase;
`

const StyledP = styled.p`
    font-size: 15px;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
`
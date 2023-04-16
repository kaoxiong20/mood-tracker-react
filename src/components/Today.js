import React from 'react';
import NewInput from './NewInput';
import styled from 'styled-components';
import StuckTitle from './StuckTitle';

const Today = () => (
  <>
  <StuckTitle/>
    <MainContent>
    <br/>
    <StyledH2>Today's Mood Entries</StyledH2>
    <StyledP>Enter your entries for today's mood. Think about: Who? What? Where? Why? Where do these feelings stem from?
      What can you do to change the way you are feeling? How is reflecting on your mood benefitting your overall health?
    </StyledP>

    <StyledP>
    So let's talk about it...
    </StyledP>
    
    <NewInput />
    
    </MainContent>
  </>
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

const MainContent = styled.div`
  font-size: 20px;
  padding: 20px 30px 20px 30px;
  text-align: center;
  margin: auto;
  width: 400px;
`
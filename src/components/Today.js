import React from 'react';
import NewInput from './NewInput';
import styled from 'styled-components';

const Today = () => (
  <div className="main-content">
    <StyledH2>Today's Mood Entries</StyledH2>
    <p>Enter your entries for today's mood.</p>

    <NewInput />
  </div>
);

export default Today;

const StyledH2 = styled.h2`

`
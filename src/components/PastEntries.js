import React from 'react';
import styled from 'styled-components';
import EntryList from './EntryList';
import StuckTitle from './StuckTitle';


const PastEntries = () => (
  <div className="main-content">
    <StuckTitle/>
    <StyledH2>Past Mood Entries</StyledH2>
    <StyledP>This shows your past entries. Take a look at your past entries. Past entries. Write abut past entries here.
    </StyledP>
    <EntryList />
  </div>
);

export default PastEntries;

const StyledH2 = styled.h2`
    font-size: 25px;
    background-color: #A2ABCE;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
    text-transform: uppercase;
`;

const StyledP = styled.p`
    font-size: 16px;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
`;
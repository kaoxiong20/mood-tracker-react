import React from 'react';
import styled from 'styled-components';

const EntryCard = ({date, time, mood}) => {
  return (
    <StyledDiv>
      <EntryDate>{date}</EntryDate>
      <h3>{time}</h3>
      <StyledMood>{mood}</StyledMood>
    </StyledDiv>
  );
}

export default EntryCard;

const StyledDiv = styled.div`
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 400px;
  text-align: center;
  margin: 40px auto;
  padding: 50px 20px 50px 20px;
  background-color: #EDE7DC;
`;

const EntryDate = styled.h2`
  color: brown;
`;

const StyledMood = styled.p`
  color: brown;
  font-size: 15px;
`;
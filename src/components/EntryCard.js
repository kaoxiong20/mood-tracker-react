import React from 'react';
import styled from 'styled-components';

const EntryCard = ({date, time, mood, img}) => {
  return (
    <StyledDiv>
      <EntryDate>{date}</EntryDate>
      <h3>{time}</h3>
      <img src={img} alt={mood}/>
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
  background-color: #A2ABCE;
  text-transform: uppercase;
`;

const EntryDate = styled.h2`
  color: #36422E;
  font-size: 20px;
`;

const StyledMood = styled.p`
  color: #76614F;
  font-size: 18px;
`;
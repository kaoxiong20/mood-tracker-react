import React from 'react';
import styled from 'styled-components';

const EntryCard = ({date, time, name, mood, img}) => {
  return (
    <StyledDiv>
      <EntryDate>{date} | {time}</EntryDate>
      <MoodH2>{mood}</MoodH2>
      {<img src={img} alt={name}/>}
    </StyledDiv>
  );
}

export default EntryCard;

const StyledDiv = styled.div`
  overflow: hidden;
  display: block;
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 400px;
  text-align: center;
  margin: 40px auto;
  padding: 50px 20px 50px 20px;
  background-color: #A2ABCE;
`;

const EntryDate = styled.h2`
  color: #36422E;
  font-size: 18px;
`;

const MoodH2 = styled.h2`
  color: #ffffff;
  font-size: 18px;
`;
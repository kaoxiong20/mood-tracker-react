import React from 'react';
import styled from 'styled-components';

function SubmitButton() {
  return (
    <AwesomeButton>Save My Mood</AwesomeButton>
  );
}

export default SubmitButton;

const AwesomeButton = styled.button`
  background-color: #EFA710;
  padding: 10px;
  cursor: pointer;
  border-radius: 18px;
  align-item: center;
  box-shadow: 5px 5px 5px grey;
  width: 150px;
  margin-top: 10px;
  text-align: center;
`;
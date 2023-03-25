import React from 'react';
import styled from 'styled-components';

function SubmitButton() {
  return (
    <AwesomeButton>Submit</AwesomeButton>
  );
}

export default SubmitButton;

const AwesomeButton = styled.button`
  background-color: #A47551;
  padding: 7px;
  cursor: pointer;
  border-radius: 8px;
  align: center;
`;
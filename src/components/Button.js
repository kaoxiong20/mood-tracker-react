import react from 'react';
import styled from 'styled-components';

function Button () {
    return (
      <SaveButton>Share this mood</SaveButton>
    );
  }
  
  export default Button;
  
  const SaveButton = styled.button`
    background-color: #EFA710;
    padding: 10px;
    cursor: pointer;
    border-radius: 18px;
    align: center;
    box-shadow: 5px 5px 5px grey;
    width: 400px;
    text-align: center;
  `;
import react from 'react';
import styled from 'styled-components';

function ShareButton () {
    const save = () => {
      alert("Your Mood Has Been Saved!");
    }

return (
  <button onClick={save}>Save This Mood</button>
);
}

  export default ShareButton;
  
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
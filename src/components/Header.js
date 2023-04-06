import react from 'react';
import styled from 'styled-components';


function Header () {
    return (
      <>
      <Subtitle>How do you feel today?</Subtitle>
      </>
    );
  }

export default Header;

const Subtitle = styled.h3`
font-size: 20px;
background-color: #A2ABCE;
padding: 10px;
text-align: center;
margin: auto;
width: 400px;
`
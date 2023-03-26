import react from 'react';
import styled from 'styled-components';


function Header () {
    return (
      <>
      <Subtitle>How are you <u>currently</u> feeling?</Subtitle>
      </>
    );
  }

export default Header;

const Subtitle = styled.h3`
font-size: 20px;
font-family: Tahoma;
text-transform: uppercase;
background-color: #16796F;
padding: 10px;
`
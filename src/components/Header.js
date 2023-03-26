import react from 'react';
import styled from 'styled-components';


function Header () {
    return (
      <>
      <Subtitle>How do you feel?</Subtitle>
      </>
    );
  }

export default Header;

const Subtitle = styled.h3`
font-size: 20px;
font-family: Tahoma;
background-color: #F8DCB0;
padding: 10px;
`
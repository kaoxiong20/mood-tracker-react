import react from 'react';
import styled from 'styled-components';

const Moods = () => {
    return (
        <>
        <StyledDiv>
        <CurrentMood>I am feeling...</CurrentMood>
        </StyledDiv>
        </>
    );
}

export default Moods;

const CurrentMood = styled.p`
    font-family: Arial;
    text-transform: uppercase;
`

const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #CBBAA8;
`
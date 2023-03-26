import React from 'react';
import styled from 'styled-components';

function Subtitle () {
    return (
        <>
        <LittleSubtitle>What things <i>out of your control</i> effects your mood?</LittleSubtitle>
        <LittleSubtitle>What things <i>in your control</i> effects your mood?</LittleSubtitle>
        </>
    );
}

export default Subtitle;

const LittleSubtitle = styled.h2`
font-size: 20px;
font-family:  Trebuchet MS;
text-align: center;
`
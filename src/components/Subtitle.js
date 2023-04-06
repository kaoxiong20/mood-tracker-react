import React from 'react';
import styled from 'styled-components';

function Subtitle () {
    return (
        <>
        <LittleSubtitle>Make the changes you want to see!</LittleSubtitle>
        </>
    );
}

export default Subtitle;

const LittleSubtitle = styled.h2`
font-size: 20px;
text-align: center;
`
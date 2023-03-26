import React from 'react';
import styled from 'styled-components';

function Subtitle () {
    return (
        <>
        <LittleSubtitle>Lorem ipsum.</LittleSubtitle>
        </>
    );
}

export default Subtitle;

const LittleSubtitle = styled.h2`
font-size: 20px;
font-family:  Trebuchet MS;
text-align: center;
`
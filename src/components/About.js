import React from "react";
import Header from "./Header";
import styled from "styled-components";

function About() {
    return (
    <>
        <br/>
        <Header />
        <Info>Write about mood tracking here.</Info>
        <Info>Write about mood tracking here.</Info>
        <Info>Write about mood tracking here.</Info>
    </>
    )
};

export default About;

const Info = styled.p`
    text-align: center;
    font-size: 20px;
`
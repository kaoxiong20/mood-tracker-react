import React from "react";
import Header from "./Header";
import styled from "styled-components";
import StuckTitle from '../components/StuckTitle';

function About() {
    return (
    <>
        <div className="main-content">
        <br/>
            <StuckTitle/>
            <Header/>
            <Info>Write about mood tracking here. Write about mood tracking here. Write about mood tracking here.</Info>
        </div>
    </>
    );
}

export default About;

const Info = styled.p`
    font-size: 15px;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
`
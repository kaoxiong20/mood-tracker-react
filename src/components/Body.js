import React from "react";
import Greeting from "./Greeting";
import Title from "./Title";
import NewInput from "./NewInput";

function Body() {
    return (
    <>
    <Greeting/>
        <style>{'body { background-color: #F2F1EF; }'}</style>
        <center><img src="/images/pexels-vie-studio-7004950.jpg" alt=""/></center>
    <Title/>
    <NewInput/>
    </>
    )
};

export default Body;
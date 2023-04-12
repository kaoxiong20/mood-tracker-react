import React from "react";
import styled from "styled-components";

function Dropdown() {
    return (
        <>
<div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>

<div class="dropdown">
    <button class="dropbtn">
      Mood Tracking
    </button>
    
<div class="dropdown-content">
      <a href="#">Today</a>
      <a href="#">Yesterday</a>
      <a href="#">Another Day</a>
    </div>
  </div>
</div>
</>
    )
}

export default Dropdown;
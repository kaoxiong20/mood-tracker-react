import React from "react";

function Dropdown() {
    return (
        <>
<div class="navbar">
    <a href="#home">Home</a>
    <a href="#news">About</a>
<div class="dropdown">
    <button class="dropbtn">Today's Mood
      <i class="fa fa-caret-down"></i>
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
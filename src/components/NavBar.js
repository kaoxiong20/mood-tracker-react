import React from "react";

function NavBar() {
    return (
        <>
<div class="navbar">
    <a href="home">Home</a>
    <a href="about">About</a>

<div class="dropdown">
    <button class="dropbtn">
      Mood Entries
    </button>
    
<div class="dropdown-content">
      <a href="today">Today</a>
      <a href="pastentries">Past Entries</a>
    </div>
  </div>
</div>
</>
    )
}

export default NavBar;
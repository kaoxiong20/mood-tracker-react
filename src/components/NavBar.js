import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div class="navbar">
        <NavLink to="home" end>Home</NavLink>
        <NavLink to="about" end>About</NavLink>

      <div class="dropdown">
        <button class="dropbtn">
          Mood Entries
        </button>
    
      <div class="dropdown-content">
        <NavLink to="today">Today</NavLink>
        <NavLink to="pastentries">Past Entries</NavLink>
    </div>
  </div>
</div>
</>
    )
}

export default NavBar;
import React from 'react';
import styled from 'styled-components';

function Moods() {
  return (
    <>
    <div>
    <CurrentMoods input type="checkbox" id="Mood1" name="Mood1" value="Happy"></CurrentMoods>
    <label for="Mood1">Happy</label>
    </div>

    <div>
    <CurrentMoods input type="checkbox" id="Mood2" name="Mood2" value="Sad"></CurrentMoods>
    <label for="Mood2">Sad</label>
    </div>

    <div>
    <CurrentMoods input type="checkbox" id="Mood3" name="Mood3" value="Content"></CurrentMoods>
    <label for="Mood3">Content</label>
    </div>
    </>
  )
}

export default Moods;

const CurrentMoods = styled.input`
    font-family: Arial;
    padding: 12px;
    box-shadow: 5px 5px 5px grey;
`
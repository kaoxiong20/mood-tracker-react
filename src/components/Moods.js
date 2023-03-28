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

    <div>
    <CurrentMoods input type="checkbox" id="Mood4" name="Mood4" value="Angry"></CurrentMoods>
    <label for="Mood4">Angry</label>
    </div>

    <div>
    <CurrentMoods input type="checkbox" id="Mood5" name="Mood5" value="Disappointed"></CurrentMoods>
    <label for="Mood5">Disappointed</label>
    </div>

    <div>
    <CurrentMoods input type="checkbox" id="Mood6" name="Mood6" value="Tired"></CurrentMoods>
    <label for="Mood6">Tired</label>
    </div>

    <div>
    <CurrentMoods input type="checkbox" id="Mood7" name="Mood7" value="Excited"></CurrentMoods>
    <label for="Mood7">Excited</label>
    </div>
    </>
  )
}

export default Moods;

const CurrentMoods = styled.input`
    font-family: Arial;
    padding: 12px;
    box-shadow: 2px 2px 2px grey;
`
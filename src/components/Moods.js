import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SubmitButton from './SubmitButton';
import Button from './Button';

function Moods() {
  return (
    <>
    <Header/>
    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood1" name="Mood1" value="Happy"></CurrentMoods>
    <label for="Mood1">Happy</label>
    </MoodDiv>

    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood2" name="Mood2" value="Sad"></CurrentMoods>
    <label for="Mood2">Sad</label>
    </MoodDiv>

    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood3" name="Mood3" value="Content"></CurrentMoods>
    <label for="Mood3">Content</label>
    </MoodDiv>

    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood4" name="Mood4" value="Angry"></CurrentMoods>
    <label for="Mood4">Angry</label>
    </MoodDiv>

    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood5" name="Mood5" value="Disappointed"></CurrentMoods>
    <label for="Mood5">Disappointed</label>
    </MoodDiv>

    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood6" name="Mood6" value="Tired"></CurrentMoods>
    <label for="Mood6">Tired</label>
    </MoodDiv>

    <MoodDiv>
    <CurrentMoods input type="checkbox" id="Mood7" name="Mood7" value="Excited"></CurrentMoods>
    <label for="Mood7">Excited</label>
    </MoodDiv>
    <SubmitButton/>
    <Button/>
    </>
  )
}

export default Moods;

const CurrentMoods = styled.input`
  font-family: Arial;
  box-shadow: 2px 2px 2px #A2ABCE;
  margin: 12px;
`

const MoodDiv = styled.div`
  border-radius: 13px;
  width: 200px;
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  background-color: #FDD55E;
  text-transform: uppercase;
  border: solid black 1px;
`
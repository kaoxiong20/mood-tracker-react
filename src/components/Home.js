import React from 'react';
import styled from 'styled-components';


const Home = () => {

  return (
    <HomeDiv>
      <Title>Mood Tracker</Title>
      <style>{'body { background-color: #EAEAEA; }'}</style>
      <center><img src="/images/pexels-vie-studio-7004950.jpg" alt=""/></center>
      <WelcomeMessage>When you keep track of your mood, you can keep
        <br/> track of your patterns, behaviors, and feelings.</WelcomeMessage>
      <SmallMessage>Track your mood with this simple <em>Mood Tracking</em> system.</SmallMessage>
      
      <button type="submit">Let's Get Started!</button>
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const WelcomeMessage = styled.h2`
text-align: center;
font-size: 18px;
`;

const SmallMessage = styled.p`
text-align: center;
font-size: 15px;
`;

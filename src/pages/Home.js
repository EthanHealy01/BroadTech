import React from 'react';
import styled from 'styled-components';
import GlobeDemo from '../components/GlobeDemo';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10%;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  color: black;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  color: black;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => {
  return (
    <>
    <HomeContainer>
      <div style={{display:'flex', flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
        <div>
      <Heading>Broadhaven Technologies</Heading>
      <SubHeading>
      Empowering Businesses Through Tailored and Intelligent Technology Solutions
      </SubHeading>
      </div>
      <GlobeDemo />
      </div>

    </HomeContainer>
    </>
  );
};

export default Home;

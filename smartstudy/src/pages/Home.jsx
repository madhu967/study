import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to Smart Study</h1>
      <p>Enhance your study routine with tools, tips, and resources designed for better learning.</p>
    </HomeContainer>
  );
};

export default Home;

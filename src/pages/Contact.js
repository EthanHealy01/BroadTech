import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555;
`;

const About = () => {
  return (
    <ContactContainer>
      <Title>Contact for Broadhaven Technologies Limited</Title>
      <Paragraph>
      CEO: mark.healy@broadtech.ie
      <br/>
      Other: ethan.healy@broadtech.ie
      </Paragraph>
    </ContactContainer>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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
    <AboutContainer>
      <Title>About Broadhaven Technologies Limited</Title>
      <Paragraph>
        Welcome to Broadhaven Technologies Limited, where innovation meets excellence. We are a dynamic and forward-thinking company, dedicated to delivering cutting-edge software solutions that drive business success. Our mission is to empower businesses with technology that enhances efficiency, productivity, and growth.
      </Paragraph>
      <Paragraph>
        Our team of experienced developers, designers, and project managers work collaboratively to bring innovative ideas to life. We are committed to continuous improvement and staying ahead of industry trends to provide our clients with the best possible solutions. With many exciting projects in the pipeline, we are poised to make significant strides in the tech industry.
      </Paragraph>
      <Paragraph>
        Thank you for taking the time to learn more about us. We look forward to partnering with you and helping your business thrive in the digital age.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;

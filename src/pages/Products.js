import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
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

const Products = () => {
  return (
    <ProductsContainer>
      <Title>Our Products</Title>
      <Paragraph>
        At Broadhaven Technologies Limited, we are dedicated to developing innovative software solutions that meet the evolving needs of our clients. While we do not have any products available at this moment, our team is working diligently on several exciting projects.
      </Paragraph>
      <Paragraph>
        We are thrilled to announce that we are planning to release a Minimum Viable Product (MVP) for a groundbreaking new software solution next summer. This product is designed to revolutionize the way businesses manage their operations, offering unprecedented efficiency and scalability. Stay tuned for more updates as we approach the launch date.
      </Paragraph>
      <Paragraph>
        Our commitment to innovation and excellence drives us to continuously explore new ideas and technologies. We are confident that our upcoming products will make a significant impact in the tech industry and provide immense value to our clients.
      </Paragraph>
      <Paragraph>
        Thank you for your interest in Broadhaven Technologies Limited. We look forward to sharing our products with you soon and helping your business thrive in the digital age.
      </Paragraph>
    </ProductsContainer>
  );
};

export default Products;

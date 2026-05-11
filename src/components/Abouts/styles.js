import styled from "styled-components";
import bgImage from "../../assets/service1.jpg";

export const AboutSection = styled.section`
  background-color: #cccccc;
  padding: 110px 0;
  display: flex;
  gap: 30px;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AboutBackground = styled.div`
  min-height: 300px;
  padding: 20px;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  padding-left: 350px;
  position: relative;
`;

export const AboutTitle = styled.h2`
  color: #000000;
  font-size: 40px;
  line-height: 1.2;
  max-width: 550px;
  margin-bottom: 15px;
`;

export const AboutSubtitle = styled.p`
  color: #000000;
  font-size: 16px;
  margin-bottom: 25px;
  max-width: 500px;
`;

export const Button = styled.button`
  background-color: #d4af37;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  margin-bottom: 5px;
  font-weight: 500;

  &:hover {
    background-color: #ffff;
    transition: all 0.4s ease;
  }
`;

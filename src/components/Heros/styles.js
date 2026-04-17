import styled from "styled-components";
import imagemhero from "../../assets/hero.jpg"

export const Container = styled.div`
  background-color: #cccccc;
  max-width: 100%;
  height: 100vh;
`;

export const BackgroundImg = styled.div`
width: 100%;
height: 420px;
    background-image: url(${imagemhero});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;
    padding-left: 120px;
    position: relative;
    z-index: 1;
 
`;

export const Title = styled.div`
  h1{
    color: #fff;
    font-size: 40px;
    line-height: 1.2;
    max-width: 550px;
    margin-bottom:  15px;


  }
`;

export const Subtitle = styled.div`
    p{
        color: #fff;
        font-size: 16px;
        margin-bottom: 25px;
        max-width: 500px;
    }
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

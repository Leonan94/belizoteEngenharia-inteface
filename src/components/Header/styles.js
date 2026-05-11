import styled from "styled-components";

export const Container = styled.div`

`;

export const NavBar = styled.div`
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px 0 15px;
  height: 70px;
`;
export const Logos = styled.div`
  margin-top: 5px;
  height: 160px;
  width: auto;
  display: flex;
  
`;
export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  gap: 40px;
  margin-right: 30px;

  a {
    color: #d4af37;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-bottom: 2px solid #d4af37;
    }
  }
`;

export const Button = styled.button`
  background-color: #d4af37;
  font-size: 17px;
  display: flex;
  align-items: center;
  padding: 6px 20px;
  border-radius: 4px;
  border: none;
  font-weight: 500;
 

  &:hover {
    background-color: #ffff;
    transition: all 0.4s ease;
  }
`;

import { Container, NavBar, Menu, Logos, Button } from "./styles"
import Logo from "../../assets/logo1.png"




export function Header() {
  return (
    <Container>
      <NavBar>
        <Logos><img src={Logo} alt="" /></Logos>
        <Menu>
          <a href="home">Home</a>
          <a href="sobre">Sobre</a>
          <a href="projetos">Projetos</a>
          <Button>Contato</Button>
        </Menu>
      </NavBar>

    </Container>

  )
}
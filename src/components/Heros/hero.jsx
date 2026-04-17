import { Container, Title, Subtitle, Button, BackgroundImg } from "./styles"


export function Hero() {
    return (
        <Container>
            <BackgroundImg >
                <Title>
                    <h1>Soluções em Engenharia com Excelência</h1>
                </Title>
                <Subtitle>
                    <p>Na Belizote Engenharia, somos apaixonados por transformar desafios em soluções inovadoras. </p>
                </Subtitle>
                <Button>Saiba Mais</Button>
            </BackgroundImg>

        </Container>
    )
}
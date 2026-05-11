import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/globalStyles'
import { Container } from './components/Header/styles'
import { Header } from './components/Header/Headers'
import { Hero } from './components/Heros/hero'
import { About } from './components/Abouts/About'
import { Service } from './components/services/service'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Service />
    <Container />
    <GlobalStyle />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/globalStyles'
import { Container } from './components/Header/styles'
import { Header } from './components/Header/Headers'
import { Hero } from './components/Heros/hero'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Container />
    <GlobalStyle />
  </StrictMode>,
)

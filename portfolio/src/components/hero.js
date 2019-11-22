import React from "react"
import styled, { withTheme } from "styled-components"

const Hero = () => {
  return (
    <Container>
      <Header>
        Hi, I’m <b>Chad Austin White</b>. I have a curiosity and passion for
        creating memorable experiences through technology and design.
      </Header>
    </Container>
  )
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
  display: flex;
  text-align: center;
  flex: 1;
`

const Header = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  max-width: 55vw;
`

export default Hero

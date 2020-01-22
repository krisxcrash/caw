import React from "react"
import styled from "styled-components"

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
  display: flex;
  flex: 1;
  min-height: 80vh;
  max-width: 55vw;
  padding: 50px 0;
`

const Header = styled.p`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
`

export default Hero

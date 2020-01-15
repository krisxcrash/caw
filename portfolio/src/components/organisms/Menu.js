import React from "react"
import styled, { withTheme } from "styled-components"

const Menu = props => {
  const { isOpen, theme } = props

  return (
    <Container isOpen={isOpen}>
      <Link href="#">Home</Link>

      <Link href="#">Portfolio</Link>

      <Link href="#">About</Link>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
`
export default withTheme(Menu)

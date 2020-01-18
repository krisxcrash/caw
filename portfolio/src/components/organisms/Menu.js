import React from "react"
import styled, { withTheme } from "styled-components"

const Menu = props => {
  const { isOpen, theme } = props

  return (
    <Container isOpen={isOpen}>
      <Link href="/">Home</Link>

      <Link href="#">Portfolio</Link>

      <Link href="#">About</Link>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? 0 : -100 + "vw")};
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: transform 300ms ease;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.extraLarge};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`
export default withTheme(Menu)

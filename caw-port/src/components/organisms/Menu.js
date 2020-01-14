import React from "react"
import styled, { withTheme } from "styled-components"

const Menu = props => {
  const { isOpen, theme } = props

  return (
    <Container isOpen={isOpen}>
      <Link>Home</Link>

      <Link>Portfolio</Link>

      <Link>About</Link>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Link = styled.a``
export default withTheme(Menu)

import React, { useState, useEffect } from "react"
import styled, { withTheme } from "styled-components"
import { Link } from "gatsby"

import { Navbar } from "react-bootstrap"

import Hamburger from "./atoms/Hamburger"
import Menu from "./organisms/Menu"

const Header = props => {
  const { theme } = props
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  return (
    <>
      <Navbar variant="light" expand="lg" id="site-navbar" fixed="top">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">Chad Austin White</Navbar.Brand>
          </Link>
          <Hamburger
            onClick={toggleMenu}
            isOpen={menuOpen}
            color={theme.colors.black}
          />
        </Container>
        <Menu isOpen={menuOpen} />
      </Navbar>
    </>
  )
}

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex: 1;
`

export default withTheme(Header)

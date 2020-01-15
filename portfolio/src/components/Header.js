import React from "react"
import styled, { withTheme } from "styled-components"
import { Link } from "gatsby"

import { Navbar } from "react-bootstrap"

import Hamburger from "./atoms/Hamburger"
import Menu from "./organisms/Menu"

const Header = () => {
  return (
    <>
      <Menu isOpen />
      <Navbar variant="light" expand="lg" id="site-navbar" fixed="top">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">Chad Austin White</Navbar.Brand>
          </Link>
          <Hamburger />
        </Container>
      </Navbar>
    </>
  )
}

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex: 1;
`

export default Header

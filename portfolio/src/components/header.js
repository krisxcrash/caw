import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"

const Header = ({ theme }) => (
  <Container>
    <Link
      to="/"
      style={{
        color: `${theme.colors.black}`,
        textDecoration: `none`,
      }}
    >
      <Logo />
    </Link>
    <Menu />
  </Container>
)

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: space-between;
  padding: 15px;
`

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 25px;
  width: 100px;
`

const Menu = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height: 25px;
  width: 75px;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)

import React from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

import Header from "./header"
import theme from "../shared/theme"
import GlobalStyles from "../shared/globalStyles"
import Hero from "./hero"
import PortfolioBlock from "./organisms/portfolioBlock"
import PageBlock from "./templates/pageBlock"

const Layout = props => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <PageBlock backgroundColor="white">
        <Hero />
      </PageBlock>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer> */}
      {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      {/* </footer>
      </div> */}
      <PageBlock backgroundColor={theme.colors.lightGray}>
        <PortfolioBlock eyebrow="Lead Product Design" />
      </PageBlock>
      <PageBlock backgroundColor={theme.colors.black}>
        <PortfolioBlock />
      </PageBlock>
      <PageBlock backgroundColor={theme.colors.lightGray}>
        <PortfolioBlock />
      </PageBlock>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

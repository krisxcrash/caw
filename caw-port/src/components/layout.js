import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../shared/theme"
import GlobalStyles from "../shared/globalStyles"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Hero from "./hero"
import PortfolioBlock from "./molecules/portfolioBlock"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container fluid className="px-0 main">
          <Navbar pageInfo={pageInfo} />
          <Row noGutters className="hero">
            <Col>
              <Container align="center">
                <Hero />
                {/* <main>{children}</main> */}
              </Container>
            </Col>
          </Row>
          <PortfolioBlock
            imageSide="left"
            backgroundColor={theme.colors.lightGray}
            buttonColor={theme.colors.black}
            buttonFontColor={theme.colors.white}
            fontColor={theme.colors.black}
            titleUnderline="dark"
            number="01."
            eyebrowText="Sr. Product Designer"
            titleText="ModCars by CarFinance"
            bodyText="Buying a car just got simple. ModCars connects the dealer, buyer and lender in one seamless experience."
            buttonText="Learn More  →"
          />
          <PortfolioBlock
            imageSide="right"
            backgroundColor={theme.colors.black}
            buttonColor={theme.colors.white}
            buttonFontColor={theme.colors.black}
            fontColor={theme.colors.white}
            titleUnderline="dark"
            number="01."
            eyebrowText="Sr. Product Designer"
            titleText="ModCars by CarFinance"
            bodyText="Buying a car just got simple. ModCars connects the dealer, buyer and lender in one seamless experience."
            buttonText="Learn More  →"
          />
          <PortfolioBlock
            imageSide="right"
            backgroundColor={theme.colors.lightGray}
            buttonColor={theme.colors.black}
            buttonFontColor={theme.colors.white}
            fontColor={theme.colors.black}
            titleUnderline="dark"
            number="01."
            eyebrowText="Sr. Product Designer"
            titleText="ModCars by CarFinance"
            bodyText="Buying a car just got simple. ModCars connects the dealer, buyer and lender in one seamless experience."
            buttonText="Learn More  →"
          />
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    )}
  />
)

export default Layout

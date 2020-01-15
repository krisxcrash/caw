import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../shared/theme"
import GlobalStyles from "../shared/globalStyles"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./Header"
import Hero from "./Hero"
import PortfolioBlock from "./templates/PortfolioBlock"
import Contact from "./templates/Contact"
import Footer from "./templates/Footer"

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
        <Container fluid className="px-0">
          <Header pageInfo={pageInfo} />
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
            buttonText="Learn More"
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
            buttonText="Learn More"
          />
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
            buttonText="Learn More"
          />
          <PortfolioBlock
            imageSide="right"
            backgroundColor={theme.colors.gray}
            buttonColor={theme.colors.black}
            buttonFontColor={theme.colors.white}
            fontColor={theme.colors.black}
            titleUnderline="dark"
            number="01."
            eyebrowText="Sr. Product Designer"
            titleText="ModCars by CarFinance"
            bodyText="Buying a car just got simple. ModCars connects the dealer, buyer and lender in one seamless experience."
            buttonText="Learn More"
          />

          <Contact />
        </Container>
        <Container fluid className="px-0" style={{ flex: 1 }}>
          <Row noGutters>
            <Col className="footer-col" style={{ background: "black" }}>
              <footer className="footer">
                <Footer />
              </footer>
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    )}
  />
)

export default Layout

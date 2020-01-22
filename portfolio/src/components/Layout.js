import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../shared/theme"
import GlobalStyles from "../shared/globalStyles"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./Header"
import Contact from "../components/templates/Contact"
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
        </Container>
        {children}
        <Contact />
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

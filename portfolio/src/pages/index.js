import React from "react"
import styled, { withTheme } from "styled-components"
import theme from "../shared/theme"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

import Hero from "../components/atoms/Hero"
import PortfolioBlock from "../components/templates/PortfolioBlock"
import DownArrow from "../icons/DownArrow"

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "homepage" }}>
      <>
        <SEO
          title="Chad Austin White - UX/UI Designer"
          keywords={[`Chad White`, `UX/UI Designer`, `UX/UI`, `Product Design`]}
        />
        <Row noGutters className="hero" style={{ position: "relative" }}>
          <Col>
            <Container align="center">
              <Hero />
            </Container>
            <DownArrow
              color={theme.colors.white}
              width={22}
              style={{
                position: "absolute",
                bottom: 20,
                left: "50vw",
              }}
            />
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
          pageLink="/ModCars"
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
      </>
    </Layout>
  )
}

export default withTheme(IndexPage)

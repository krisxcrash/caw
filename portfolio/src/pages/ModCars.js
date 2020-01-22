import React from "react"
import styled, { withTheme } from "styled-components"
import { Link } from "gatsby"

import { Col, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../shared/theme"
import DownArrow from "../icons/DownArrow"

const imageHeight = 751
const ModCars = () => (
  <Layout pageInfo={{ pageName: "ModCars" }}>
    <SEO title="ModCars" />
    <Container>
      <Content>
        <Title>ModCars by CarFinance</Title>
        <SubTitle color={theme.colors.white}>
          ModCars™ delivers a complete shopping and financing experience
          tailored to what the customer wants. Anchored by your dealerships
          unique inventory, pricing, trade-in, ancillary products, and desking
          requirements.
        </SubTitle>
      </Content>
      <Number>01</Number>

      <DownArrow
        color={theme.colors.white}
        width={22}
        style={{
          position: "absolute",
          bottom: 20,
          left: "50vw",
        }}
      />
    </Container>
    <PlaceholderImage height={1024} id="TEST" />
    <Block
      justify="flex-start"
      // height={2200}
      backgroundColor={theme.colors.gray}
    >
      <SubTitle
        color={theme.colors.black}
        style={{ width: "50%", margin: "250px auto" }}
      >
        Our product integrates the dealership, lender and customer into one
        seamless experience.
      </SubTitle>
      <PlaceholderImage
        height={imageHeight}
        width={1200}
        backgroundColor="#ff33cc"
      />
    </Block>
    <Block paddingTop={imageHeight / 2}>
      <Row noGutters style={{ padding: "200px 0 100px", width: "100vw" }}>
        <Col lg={6} md={12}>
          <TwoByContent padding="125px 50px 125px 125px">
            <TwoByTitle>User Testing & Research</TwoByTitle>
            <TwoBySubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TwoBySubtitle>
          </TwoByContent>
        </Col>
        <Col lg={6} md={12}>
          <TwoByImage />
        </Col>
      </Row>
      <Row noGutters style={{ padding: "100px 0 200px", width: "100vw" }}>
        <Col lg={6} md={12}>
          <TwoByImage />
        </Col>
        <Col lg={6} md={12}>
          <TwoByContent padding="125px 125px 125px 50px">
            <TwoByTitle>User Testing & Research</TwoByTitle>
            <TwoBySubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TwoBySubtitle>
          </TwoByContent>
        </Col>
      </Row>
    </Block>
    <Block justify="center" backgroundColor={theme.colors.gray}>
      <h1 style={{ textAlign: "center" }}>Placeholder - Wireframes</h1>
    </Block>
    <Block justify="center" backgroundColor={theme.colors.white}>
      <h1 style={{ textAlign: "center" }}>Placeholder - UI Designs</h1>
    </Block>
    <Block justify="center" backgroundColor={theme.colors.gray}>
      <h1 style={{ textAlign: "center" }}>Placeholder - Analytics</h1>
    </Block>
  </Layout>
)

const Container = styled.div`
  min-height: 85vh;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 150px;
  display: flex;
  justify-content: space-between;
  position: relative;
`

const Content = styled.div`
  width: 65%;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin-bottom: 50px;
`

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ color }) => color};
`

const Number = styled.h3`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
`

const PlaceholderImage = styled.div`
  background-color: #ff33cc;
  height: ${({ height }) => height + "px" || 80 + "vh"};
  width: ${({ width }) => width + "px" || 100 + "vw"};
  position: absolute;
  bottom: calc((${({ height }) => height + "px"} / 2) * -1);
`

const Block = styled.div`
  min-height: 950px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify};
  align-items: center;
  position: relative;
  padding-top: ${({ paddingTop }) => paddingTop}px;
`

const TwoByImage = styled.div`
  height: 425px;
  width: 744px;
  background-color: #ff33cc;
`

const TwoByContent = styled.div`
  max-width: 560px;
  padding: ${({ padding }) => padding};
`

const TwoByTitle = styled.h2``

const TwoBySubtitle = styled.p``

export default ModCars

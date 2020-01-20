import React from "react"
import styled, { withTheme } from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../shared/theme"

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
      {/* <Link to="#test">Go back to the homepage</Link> */}
    </Container>
    <PlaceholderImage height={1024} id="TEST" />
    <PlaceholderBlock backgroundColor={theme.colors.lightGray}>
      <SubTitle color={theme.colors.black} style={{ width: "50%" }}>
        Our product integrates the dealership, lender and customer into one
        seamless experience.
      </SubTitle>
      <PlaceholderImage height={751} backgroundColor="#ff33cc" />
    </PlaceholderBlock>
    <PlaceholderBlock backgroundColor={theme.colors.gray}>
      <h1 style={{ textAlign: "center" }}>Placeholder - Wireframes</h1>
    </PlaceholderBlock>
    <PlaceholderBlock backgroundColor={theme.colors.white}>
      <h1 style={{ textAlign: "center" }}>Placeholder - UI Designs</h1>
    </PlaceholderBlock>
    <PlaceholderBlock backgroundColor={theme.colors.gray}>
      <h1 style={{ textAlign: "center" }}>Placeholder - Analytics</h1>
    </PlaceholderBlock>
  </Layout>
)

const Container = styled.div`
  height: 85vh;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 150px;
  display: flex;
  justify-content: space-between;
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

const Image = styled.img``

const BackgroundBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlaceholderImage = styled.div`
  background-color: #ff33cc;
  height: ${({ height }) => height + "px" || 80 + "vh"};
`

const PlaceholderBlock = styled.div`
  height: 1024px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ModCars

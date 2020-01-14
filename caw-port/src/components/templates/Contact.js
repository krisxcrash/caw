import React from "react"
import styled, { withTheme } from "styled-components"
import MainButton from "../molecules/MainButton"
import { Col, Row } from "react-bootstrap"

const Contact = props => {
  const { theme } = props
  return (
    <Container>
      <Row align="center" className="h-100">
        <Col sm={12} className="align-self-center">
          <Headline>Let's work together</Headline>
          <MainButton color={theme.colors.white} fontColor={theme.colors.black}>
            Contact{" "}
          </MainButton>
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  height: 600px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`

const Headline = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 29px;
`

export default withTheme(Contact)

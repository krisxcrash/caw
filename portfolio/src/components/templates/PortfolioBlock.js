import React from "react"
import styled from "styled-components"

import { Col, Row } from "react-bootstrap"
import MainButton from "../molecules/MainButton"

const PortfolioBlock = props => {
  const {
    backgroundColor,
    bodyText,
    buttonColor,
    buttonFontColor,
    buttonText,
    eyebrowText,
    fontColor,
    imageSide,
    number,
    titleText,
    titleUnderline,
  } = props

  return (
    <Container backgroundColor={backgroundColor}>
      <Row noGutters>
        {imageSide === "left" ? (
          <>
            <Col lg={8} className="test">
              <Image />
            </Col>
            <Col lg={4} align="center" className="block my-auto">
              <Block fontColor={fontColor}>
                <Number>{number}</Number>
                <Eyebrow>{eyebrowText}</Eyebrow>
                <Title
                  className={
                    titleUnderline === "dark"
                      ? "titleUnderlineDark"
                      : "titleUnderlineLight"
                  }
                >
                  {titleText}
                </Title>
                <Content>{bodyText}</Content>
                <MainButton color={buttonColor} fontColor={buttonFontColor}>
                  {buttonText}
                </MainButton>
              </Block>
            </Col>
          </>
        ) : (
          <>
            <Col lg={4} align="center" className="block my-auto">
              <Block fontColor={fontColor}>
                <Number>{number}</Number>
                <Eyebrow>{eyebrowText}</Eyebrow>
                <Title
                  className={
                    titleUnderline === "dark"
                      ? "titleUnderlineDark"
                      : "titleUnderlineLight"
                  }
                >
                  {titleText}
                </Title>
                <Content>{bodyText}</Content>
                <MainButton color={buttonColor} fontColor={buttonFontColor}>
                  {buttonText}
                </MainButton>
              </Block>
            </Col>
            <Col lg={8} className="test">
              <Image />
            </Col>
          </>
        )}
      </Row>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const Image = styled.div`
  width: 850px;
  height: 500px;
  background-color: gray;
  margin: 150px 125px;
  justify-content: flex-end;
`

const Block = styled.div`
  color: ${({ fontColor }) => fontColor};
  flex: 1;
  max-width: 390px;
  text-align: left;
`

const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  line-height: 0.83;
  letter-spacing: 1px;
  text-align: right;
  color: ${({ fontColor }) => fontColor};
  text-decoration-line: underline;
`

const Eyebrow = styled.p`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
`

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 1.43;
`

const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
`

export default PortfolioBlock

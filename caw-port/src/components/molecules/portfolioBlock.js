import React from "react"
import styled, { withTheme } from "styled-components"

import { Col, Row } from "react-bootstrap"

const PortfolioBlock = props => {
  const {
    backgroundColor,
    titleUnderline,
    fontColor,
    eyebrow,
    imageSide,
    buttonColor,
    buttonFontColor,
    number,
    theme,
    eyebrowText,
    titleText,
    bodyText,
    buttonText,
  } = props

  return (
    <Container backgroundColor={backgroundColor}>
      <Row noGutters>
        {imageSide === "left" ? (
          <>
            <Col lg={8} className="test">
              <Image />
            </Col>
            <Col lg={4} align="left" className="block">
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
                <RoundButton
                  buttonColor={buttonColor}
                  buttonFontColor={buttonFontColor}
                >
                  {buttonText}
                </RoundButton>
              </Block>
            </Col>
          </>
        ) : (
          <>
            <Col lg={4} align="left" className="block">
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
                <RoundButton
                  buttonColor={buttonColor}
                  buttonFontColor={buttonFontColor}
                >
                  {buttonText}
                </RoundButton>
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
  max-width: 390px;
  margin: 150px ${({ imageSide }) => (imageSide === "right" ? "auto" : 0)};
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

const RoundButton = styled.button`
  align-content: center;
  background-color: ${({ buttonColor }) => buttonColor};
  border-radius: 27.5px;
  box-shadow: 0 6px 12px 0 rgba(26, 26, 26, 0.21);
  color: ${({ buttonFontColor }) => buttonFontColor};
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.small};
  height: 53px;
  width: 322px;
`

export default PortfolioBlock

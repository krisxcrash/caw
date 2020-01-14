import React from "react"
import styled, { withTheme } from "styled-components"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  const footerData = [
    {
      title: "Work",
      content: ["Popular", "Trending", "Catalog", "Features"],
    },
    {
      title: "Contact",
      content: ["Press Releases", "Mission", "Strategy", "Works"],
    },
    {
      title: "Social",
      content: ["Instagram", "Twitter"],
    },
  ]

  const renderFooterColumns = footerData.map((column, i) => (
    <Col lg={4} key={i}>
      <Title>{column.title}</Title>
      {column.content.map((link, index) => (
        <Link key={index}>{link}</Link>
      ))}
    </Col>
  ))

  return (
    <Row
      className="my-auto h100"
      noGutters
      style={{ flex: 1, justifyContent: "center" }}
    >
      <Col lg={{ span: 4, offset: 1 }}>
        <Row
          noGutters
          style={{
            flex: 1,
          }}
        >
          {renderFooterColumns}
          <LegalCopyContainer>
            <Title>Legal copy fpo</Title>
            <LegalCopy>
              I am a versatile designer with a strong passion for problem
              solving. Having over +10 of experience, a strategic approach is
              utilized from concept through creation to build effective
              solutions. I specialize in design projects through a detail
              orientated approach including discovery, research, strategy and
              design.
            </LegalCopy>
          </LegalCopyContainer>
        </Row>
      </Col>
    </Row>
  )
}

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin-bottom: 15px;
`

const Link = styled.p`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  color: ${({ theme }) => theme.colors.gray};
`

const LegalCopyContainer = styled.div`
  margin-top: 50px;
`

const LegalCopy = styled.p`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  color: ${({ theme }) => theme.colors.gray};
`

export default Footer

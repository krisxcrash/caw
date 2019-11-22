import React from "react"
import styled, { withTheme } from "styled-components"

const PortfolioBlock = props => {
  const { eyebrow, imageSide, buttonColor } = props

  return (
    <Container>
      <LeftColumn>
        <Image />
      </LeftColumn>
      <RightColumn>
        {/* <Block> */}
        <Eyebrow>{eyebrow}</Eyebrow>
        {/* </Block> */}
      </RightColumn>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-content: center;
  flex-direction: row;
`

const Image = styled.div`
  align-self: center;
  width: 800px;
  height: 500px;
  background-color: #ff33cc;
`

const Block = styled.div``

const Eyebrow = styled.p`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small}px;
`

const LeftColumn = styled.div`
  justify-content: space-around;
  flex: 1;
`

const RightColumn = styled.div`
  flex: 1;
`

export default PortfolioBlock

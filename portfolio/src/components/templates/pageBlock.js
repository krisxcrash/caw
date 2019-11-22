import React from "react"
import styled, { withTheme } from "styled-components"

const PageBlock = props => {
  const { backgroundColor, children } = props
  return <Container backgroundColor={backgroundColor}>{children}</Container>
}

const Container = styled.div`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.white};
  height: 80vh;
  width: 100vw;
  justify-content: center;
`

export default PageBlock

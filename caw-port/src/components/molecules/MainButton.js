import React from "react"
import styled from "styled-components"

const MainButton = props => {
  const { children, color, fontColor, theme } = props
  return (
    <Container color={color} fontColor={fontColor}>
      {children}
      {"  "}→
    </Container>
  )
}

const Container = styled.button`
  align-content: center;
  background-color: ${({ color }) => color};
  border-radius: 27.5px;
  box-shadow: 0 6px 12px 0 rgba(26, 26, 26, 0.21);
  color: ${({ fontColor }) => fontColor};
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.small};
  height: 53px;
  width: 322px;
`

export default MainButton

import React from "react"
import styled from "styled-components"

const Hamburger = props => {
  const { isOpen, onClick, color } = props

  return (
    <>
      <Container isOpen={isOpen} onClick={onClick}>
        <HamburgerMenu>
          <Bar color={color} className={`${isOpen ? "one-ani" : "one"}`} />
          <Bar color={color} className={`${isOpen ? "two-ani" : "two"}`} />
        </HamburgerMenu>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 1000;

  position: absolute;
  top: 10px;
  right: 20px;
`

const HamburgerMenu = styled.div`
  height: 40px;
  width: 47px;
`

const Bar = styled.div`
  background-color: ${({ color }) => color};
  height: 3px;
  width: 47px;
  transition: all 0.25s;
  position: relative;

  &.one {
    top: 10px;
  }

  &.two {
    top: 20px;
  }

  &.one-ani {
    transform: rotate(33deg);
    top: 15px;
    transition: all 0.25s;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &.two-ani {
    transform: rotate(-33deg);
    top: 12px;
    transition: all 0.25s;
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export default Hamburger

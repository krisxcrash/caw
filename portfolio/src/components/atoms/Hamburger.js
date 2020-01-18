import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Hamburger = props => {
  const { isOpen, onClick, color, theme } = props
  const [animatedClass, setAnimatedClass] = useState("")
  const [openClass, setOpenClass] = useState("")

  return (
    <>
      <Container
        isOpen={() => {
          if (isOpen) {
            setAnimatedClass("-ani")
            setOpenClass("open")
          } else {
            setAnimatedClass("")
            setOpenClass("")
          }
        }}
        onClick={onClick}
      >
        <HamburgerMenu>
          <Bar color={color} className={`one${animatedClass} ${openClass}`} />
          <Bar color={color} className={`two${animatedClass} ${openClass}`} />
        </HamburgerMenu>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 1000;
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
  }
  &.two-ani {
    transform: rotate(-33deg);
    top: 12px;
    transition: all 0.25s;
  }

  /* &.open {
    background-color: ${({ theme }) => theme.colors.white};
  } */
`

export default Hamburger

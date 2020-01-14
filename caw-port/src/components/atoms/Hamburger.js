import React, { useState } from "react"
import styled from "styled-components"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [animatedClass, setAnimatedClass] = useState("")

  const toggleMenu = () => {
    if (isOpen) {
      setAnimatedClass("-ani")
    } else {
      setAnimatedClass("")
    }
  }

  return (
    <Container
      onClick={() => {
        setIsOpen(!isOpen)
        toggleMenu()
      }}
    >
      <Menu>
        <Bar className={`one${animatedClass}`} />
        <Bar className={`two${animatedClass}`} />
      </Menu>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Menu = styled.div`
  height: 40px;
  width: 47px;
`

const Bar = styled.div`
  background-color: black;
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
`

export default Hamburger

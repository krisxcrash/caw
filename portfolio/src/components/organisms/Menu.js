import React from "react"
import styled, { withTheme } from "styled-components"
import Hamburger from "../atoms/Hamburger"

const Menu = props => {
  const { isOpen, theme } = props
  // const [menuOpen, setMenuOpen] = useState(isOpen)

  // useEffect(() => {
  //   (menuOpen)
  // }, [menuOpen])

  // const toggleMenu = () => {
  //   console.log("menuOpen")
  //   if (menuOpen) {
  //     setMenuOpen(false)
  //   } else {
  //     setMenuOpen(true)
  //   }
  // }

  return (
    <Container isOpen={isOpen}>
      <Hamburger
        isOpen={isOpen}
        color={theme.colors.white}
        // onClick={toggleMenu}
      />
      <Link href="/">Home</Link>

      <Link href="/page-2">Portfolio</Link>

      <Link href="#">About</Link>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? 0 : -100 + "vw")};
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: transform 300ms ease;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.extraLarge};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`
export default withTheme(Menu)

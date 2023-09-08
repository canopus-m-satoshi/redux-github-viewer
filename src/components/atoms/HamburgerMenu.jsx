import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'
import Nav from '../molecules/Nav'
import { useState } from 'react'

const StyledMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: #fff;
  font-weight: bold;
  position: relative;
`

const HamburgerMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const handleMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <StyledMenu>
      <FontAwesomeIcon icon={faBars} size="2x" onClick={handleMenu} />
      <Nav isShowMenu={isShowMenu} />
    </StyledMenu>
  )
}
export default HamburgerMenu

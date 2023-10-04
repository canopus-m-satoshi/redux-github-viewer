import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'
import Nav from '../molecules/Nav'

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

const HamburgerMenu = ({ handleMenu, handlePageLink, isMenuShow, menuRef }) => {
  return (
    <StyledMenu ref={menuRef}>
      <FontAwesomeIcon icon={faBars} size="2x" onClick={handleMenu} />
      <Nav handlePageLink={handlePageLink} isMenuShow={isMenuShow} />
    </StyledMenu>
  )
}
export default HamburgerMenu

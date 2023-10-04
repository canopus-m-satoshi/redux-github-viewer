import { styled } from 'styled-components'
import SiteTitle from '../atoms/SiteTitle'
import Gnav from '../molecules/Gnav'
import HamburgerMenu from '../atoms/HamburgerMenu'

const StyledHeader = styled.header`
  padding: 1.5rem;
  color: #fff;
  background-color: #333333;
  display: flex;
  align-items: center;
  gap: 1.8rem;

  @media (max-width: 767px) {
    padding: 1rem;
    justify-content: space-between;
  }
`

const Header = ({ handleMenu, handlePageLink, isMenuShow, menuRef }) => {
  return (
    <StyledHeader>
      <SiteTitle title="Github Viewer" />
      <Gnav />
      <HamburgerMenu handleMenu={handleMenu} handlePageLink={handlePageLink} isMenuShow={isMenuShow} menuRef={menuRef} />
    </StyledHeader>
  )
}
export default Header

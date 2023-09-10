import { styled } from 'styled-components'
import NavItem from '../atoms/NavItem'

const StyledNav = styled.nav`
  text-align: left;
  background-color: #fff;
  width: 200px;
  border-radius: 2px;
  padding: 0.5rem 0.6rem;
  position: absolute;
  right: 0;
  top: 150%;
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
  display: ${(props) => (props.$isShowMenu ? 'block' : 'none')};
`

const Nav = ({ isShowMenu }) => {
  return (
    <StyledNav $isShowMenu={isShowMenu}>
      <NavItem name="Top" path="/" />
      <NavItem name="Profile" path="/profile" />
      <NavItem name="Issue" path="/issue" />
      <NavItem name="Pull Request" path="/pull-request" />
    </StyledNav>
  )
}
export default Nav

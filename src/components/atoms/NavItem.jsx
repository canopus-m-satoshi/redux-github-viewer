import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 8px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  display: block;

  &:hover {
    background: #0366d6;
    color: white;
  }
`

const NavItem = ({ name, path }) => {
  return <StyledLink to={path}>{name}</StyledLink>
}
export default NavItem

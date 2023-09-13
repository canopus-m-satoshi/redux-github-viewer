import styled from 'styled-components'

const StyledTabList = styled.ul`
  display: flex;
`

const TabList = ({ children }) => {
  return <StyledTabList>{children}</StyledTabList>
}
export default TabList

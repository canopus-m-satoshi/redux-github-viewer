import styled from 'styled-components'

const StyledTabPanel = styled.div`
  display: ${(props) => (props.$SelectedTab ? 'block' : 'none')};
`

const TabPanel = ({ children, SelectedTab }) => {
  return <StyledTabPanel $SelectedTab={SelectedTab}>{children}</StyledTabPanel>
}
export default TabPanel

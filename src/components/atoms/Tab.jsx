import styled from 'styled-components'

const StyledTab = styled.li`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
  border-top: 1px solid #e1e4e8;
  border-right: 1px solid #e1e4e8;
  border-left: 1px solid #e1e4e8;
  list-style-type: none;

  span {
    cursor: pointer;
    color: #586069;
    padding: 16px;
    display: block;
    width: 100%;
  }
`

const Tab = ({ children }) => {
  return (
    <StyledTab>
      <span>{children}</span>
    </StyledTab>
  )
}
export default Tab

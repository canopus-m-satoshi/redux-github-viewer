import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { toggleTab } from '../../features/toggleTabSlice'

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
  const toggleTabState = useSelector((state) => state.toggleTab.isShow)
  const dispatch = useDispatch()

  const hondleToggle = () => {
    dispatch(toggleTab(toggleTabState))
  }

  return (
    <StyledTab onClick={hondleToggle}>
      <span>{children}</span>
    </StyledTab>
  )
}
export default Tab

import { styled } from 'styled-components'
import Button from '../atoms/Button'
import HeaderTitle from '../atoms/HeaderTitle'
import Input from '../atoms/Input'
import IssueForm from '../organisms/IssueForm'
import { useDispatch } from 'react-redux'
import { show, push } from '../../features/ui/uiSlice'
import { remove } from '../../features/issue/issueSlice'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

const IssueHeader = ({ onSearchFeilds }) => {
  const dispatch = useDispatch()

  const onAdd = () => {
    dispatch(push(<IssueForm />))
    dispatch(show())
  }

  const onDelete = () => {
    dispatch(remove())
  }

  return (
    <StyledHeader>
      <HeaderTitle title="Issue" />
      <Input onSearchFeilds={onSearchFeilds} />
      <Button text="New" onClick={onAdd} />
      <Button text="Ddelete" onClick={onDelete} styleType="delete" />
    </StyledHeader>
  )
}
export default IssueHeader

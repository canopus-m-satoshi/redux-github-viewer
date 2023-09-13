import { styled } from 'styled-components'
import Button from '../atoms/Button'
import HeaderTitle from '../atoms/HeaderTitle'
import Input from '../atoms/Input'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

const onAdd = () => {}
const onDelete = () => {}

const IssueHeader = () => {
  return (
    <StyledHeader>
      <HeaderTitle title="Issue" />
      <Input />
      <Button text="New" onClick={onAdd} />
      <Button text="Ddelete" onClick={onDelete} styleType="delete" />
    </StyledHeader>
  )
}
export default IssueHeader

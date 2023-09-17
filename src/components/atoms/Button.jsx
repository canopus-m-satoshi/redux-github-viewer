import { styled } from 'styled-components'

const StyleBasedButton = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  outline: none;
  appearance: none;
  background: #42c360;
`

const StyledButtonPrimary = styled(StyleBasedButton)`
  background: #4742c3;
  border-bottom: 2px solid #2833a7;
`

const StyledButtonDelete = styled(StyleBasedButton)`
  background: #d73a49;
  border-bottom: 2px solid #af1c2a;
`

const StyledButtonTransparent = styled(StyleBasedButton)`
  background: transparent;
  border: none;
  color: #0366d6;
`

// 全ボタンコンポーネント
const buttonStyleLists = {
  default: StyleBasedButton,
  primary: StyledButtonPrimary,
  delete: StyledButtonDelete,
  transparent: StyledButtonTransparent,
}

const Button = ({ text, styleType, onClick }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default

  return <Component onClick={onClick}>{text}</Component>
}
export default Button

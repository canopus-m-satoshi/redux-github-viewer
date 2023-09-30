import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

Modal.setAppElement('#root')

const StyledModal = styled(Modal)`
  position: absolute;
  inset: 40px;
  border: 1px solid #cccccc;
  background: #fff;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;

  margin: auto;
  width: 60%;
`

const ModalWrapper = () => {
  const { show, stack } = useSelector((state) => state.ui.modal)

  return (
    <StyledModal isOpen={show} contentLabel="Add Issue Modal" key="global-modal">
      {stack[stack.length - 1]}
    </StyledModal>
  )
}
export default ModalWrapper

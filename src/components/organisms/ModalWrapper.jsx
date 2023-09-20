import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Title from '../atoms/Title'
import Button from '../atoms/Button'

import { show } from '../../features/ui/uiSlice'

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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 598px;
  height: 100%;
  margin-inline: auto;
`

const StyledFormContainer = styled.div`
  padding: 32px 0px 16px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > * {
    outline: none;
  }

  input,
  textarea,
  select {
    border-radius: 6px;
    border: 1px solid #e1e4e8;
  }

  textarea {
    min-height: 150px;
  }

  select {
    width: max-content;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 8px;
  margin-top: auto;

  > button {
    flex-basis: 20%;
  }
`

const ModalWrapper = () => {
  // const isOpen = useSelector((state) => state.modal.show) 値は取得できるがmodal反応せず
  const isOpen = useSelector((state) => state.ui.modal.show)

  const dispatch = useDispatch()

  return (
    <StyledModal isOpen={isOpen} contentLabel="Add Issue Modal">
      <StyledContainer>
        <Title title="Issueを追加" />
        <StyledFormContainer>
          <StyledForm>
            <StyledFormItem>
              <label>タイトル</label>
              <input id="title" type="text" />
            </StyledFormItem>
            <StyledFormItem>
              <label>説明</label>
              <textarea
                placeholder="説明を入力してください"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
            </StyledFormItem>
            <StyledFormItem>
              <label>ステータス</label>
              <select>
                <option value="0">Open</option>
                <option value="1">Close</option>
              </select>
            </StyledFormItem>
          </StyledForm>
        </StyledFormContainer>
        <StyledButtonContainer>
          <Button text="更新" />
          <Button
            text="閉じる"
            styleType="transparent"
            onClick={() => dispatch(show())}
          />
        </StyledButtonContainer>
      </StyledContainer>
    </StyledModal>
  )
}
export default ModalWrapper

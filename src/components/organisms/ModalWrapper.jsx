import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Title from '../atoms/Title'
import Button from '../atoms/Button'

import { show, stack } from '../../features/ui/uiSlice'
import { update, create } from '../../features/issue/issueSlice'
import { useEffect, useState } from 'react'

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

const StyledAlertText = styled.p`
  color: #d73a49;
  background: rgba(215, 58, 73, 0.35);
  padding: 8px;
  border-radius: 6px;
  display: ${(props) => (props.$isError ? 'block' : 'none')};
`

const ModalWrapper = () => {
  const isOpen = useSelector((state) => state.ui.modal.show)
  const { id, title, status, description } = useSelector(
    (state) => state.ui.modal.stack,
  )
  const dispatch = useDispatch()

  const [modalTitle, setModalTitle] = useState('')
  const [modalDescription, setModalDescription] = useState('')
  const [modalStatus, setModalStatus] = useState('')
  const [isError, setIsError] = useState(false)
  const [alertText, setAlertText] = useState('')

  useEffect(() => {
    setModalTitle(title)
    setModalDescription(description)
    setModalStatus(status)
  }, [title, description, status])

  const handleOnClose = () => {
    dispatch(show())
    dispatch(stack({}))
  }

  const onChangeTitle = (e) => {
    setModalTitle(e.target.value)
  }

  const onChangeTextarea = (e) => {
    setModalDescription(e.target.value)
  }

  const onChangeStatus = (e) => {
    setModalStatus(e.target.value)
  }

  const handleOnUpdate = () => {
    dispatch(
      update({
        id: id,
        title: modalTitle,
        description: modalDescription,
        status: modalStatus,
      }),
    )
    dispatch(show())
  }

  return (
    <StyledModal isOpen={isOpen} contentLabel="Add Issue Modal" key={id}>
      <StyledContainer>
        <Title title="Issueを追加" />
        <StyledFormContainer>
          <StyledForm>
            <StyledFormItem>
              <label>タイトル</label>
              <input
                type="text"
                defaultValue={title}
                onChange={onChangeTitle}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label>説明</label>
              <textarea
                placeholder="説明を入力してください"
                defaultValue={description}
                onChange={onChangeTextarea}></textarea>
            </StyledFormItem>
            <StyledFormItem>
              <label>ステータス</label>
              <select
                defaultValue={status === 0 ? 0 : 1}
                onChange={onChangeStatus}>
                <option value={0}>Open</option>
                <option value={1}>Close</option>
              </select>
            </StyledFormItem>
          </StyledForm>
        </StyledFormContainer>
        {title === undefined || description === undefined ? (
          <StyledAlertText $isError={isError}>{alertText}</StyledAlertText>
        ) : (
          ''
        )}
        <StyledButtonContainer>
          {title === undefined || description === undefined ? (
            <Button text="作成" onClick={handleOnCreate} />
          ) : (
            <Button text="更新" onClick={handleOnUpdate} />
          )}
          <Button
            text="閉じる"
            styleType="transparent"
            onClick={handleOnClose}
          />
        </StyledButtonContainer>
      </StyledContainer>
    </StyledModal>
  )
}
export default ModalWrapper

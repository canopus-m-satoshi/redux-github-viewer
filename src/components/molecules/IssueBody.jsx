import { styled } from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import IssueForm from '../../components/organisms/IssueForm'
import { toggle, push } from '../../features/ui/uiSlice'

const StyledTableContainer = styled.div`
  /* overflow: scroll; */
  width: 100%;
`

const StyledTable = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
`

const StyledTableTr = styled.tr`
  tbody & {
    cursor: pointer;

    &:hover {
      background: rgb(198 218 230 / 25%);
    }
  }

  th:first-child,
  td:first-child {
    min-width: auto;
    white-space: nowrap;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 150rem;
  }
`

const StyledTableTh = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid #e1e4e8;
`

const StyledTableTd = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid #e1e4e8;
`

const Statuses = ['Open', 'Close']

const IssueBody = ({ searchFields, handleCheck, setIsChecked, isChecked }) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.issue.data)

  const handleModalShow = (e, data) => {
    dispatch(push(<IssueForm defaultValue={data} />))

    dispatch(toggle())
  }

  const handleCheckboxAll = (data) => {
    const newIsChecked = { ...isChecked }
    data.forEach((item) => {
      newIsChecked[item.id] = !newIsChecked[item.id]
    })
    setIsChecked(newIsChecked)
  }

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <StyledTableTr>
            <StyledTableTh>
              <input type="checkbox" onChange={() => handleCheckboxAll(data)} />
            </StyledTableTh>
            <StyledTableTh></StyledTableTh>
            <StyledTableTh>ステータス</StyledTableTh>
            <StyledTableTh>作成者</StyledTableTh>
            <StyledTableTh>作成日付</StyledTableTh>
            <StyledTableTh>更新日付</StyledTableTh>
          </StyledTableTr>
        </thead>
        <tbody>
          {searchFields.length > 0 ? (
            searchFields.map((data) => (
              <StyledTableTr key={data.id} onClick={(e) => handleModalShow(e, data)}>
                <StyledTableTd>
                  <input type="checkbox" onClick={(e) => e.stopPropagation()} onChange={() => handleCheck(data.id)} />
                </StyledTableTd>
                <StyledTableTd className="longCdatal">{data.title}</StyledTableTd>
                <StyledTableTd>{Statuses[data.status]}</StyledTableTd>
                <StyledTableTd>{data.author}</StyledTableTd>
                <StyledTableTd>{data.createdDate}</StyledTableTd>
                <StyledTableTd>{data.updatedDate}</StyledTableTd>
              </StyledTableTr>
            ))
          ) : (
            <StyledTableTr>
              <StyledTableTd>データがありません</StyledTableTd>
            </StyledTableTr>
          )}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  )
}
export default IssueBody

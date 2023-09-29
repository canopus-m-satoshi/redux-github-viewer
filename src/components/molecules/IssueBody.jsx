import { styled } from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import IssueForm from '../../components/organisms/IssueForm'
import { show, push } from '../../features/ui/uiSlice'

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

const IssueBody = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.issue.data)

  const handleModalShow = (data) => {
    dispatch(
     push(
       <IssueForm
          defaultValue={data}
        />
       )
    )

    dispatch(show())
  }

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <StyledTableTr>
            <StyledTableTh>
              <input type="checkbox" />
            </StyledTableTh>
            <StyledTableTh></StyledTableTh>
            <StyledTableTh>ステータス</StyledTableTh>
            <StyledTableTh>作成者</StyledTableTh>
            <StyledTableTh>作成日付</StyledTableTh>
            <StyledTableTh>更新日付</StyledTableTh>
          </StyledTableTr>
        </thead>
        <tbody>
          {data.map((data) => (
            <StyledTableTr key={data.id} onClick={() => handleModalShow(data)}>
              <StyledTableTd>
                <input type="checkbox" />
              </StyledTableTd>
              <StyledTableTd className="longCdatal">{data.title}</StyledTableTd>
              <StyledTableTd>
                {data.status === 0 ? 'Open' : 'Close'}
              </StyledTableTd>
              <StyledTableTd>{data.author}</StyledTableTd>
              <StyledTableTd>{data.createdDate}</StyledTableTd>
              <StyledTableTd>{data.updatedDate}</StyledTableTd>
            </StyledTableTr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  )
}
export default IssueBody

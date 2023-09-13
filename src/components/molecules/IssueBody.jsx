import { styled } from 'styled-components'

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
  }

  th:first-child {
    min-width: auto;
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
          <StyledTableTr>
            <StyledTableTd>
              <input type="checkbox" />
            </StyledTableTd>
            <StyledTableTd>A bug in Top Page</StyledTableTd>
            <StyledTableTd>Open</StyledTableTd>
            <StyledTableTd></StyledTableTd>
            <StyledTableTd>09-12-2023</StyledTableTd>
            <StyledTableTd>09-12-2023</StyledTableTd>
          </StyledTableTr>
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  )
}
export default IssueBody

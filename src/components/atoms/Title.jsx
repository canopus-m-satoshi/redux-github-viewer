import { styled } from 'styled-components'

const StyledTitle = styled.h1`
  place-items: center;
  place-content: center;
  text-align: center;

  display: ${(props) => (props.$centering ? 'grid' : 'block')};
  margin-top: ${(props) => (props.$centering ? '5rem' : '0')};
`

const Title = ({ title, centering }) => {
  return <StyledTitle $centering={centering}>{title}</StyledTitle>
}
export default Title

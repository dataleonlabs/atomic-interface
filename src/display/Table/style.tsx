
import styled from 'styled-components'

export const StyledTable = styled.div<any>`
  .table thead th {
    ${props => props.hideHeader ? 'display: none' : ''};
  }
`;
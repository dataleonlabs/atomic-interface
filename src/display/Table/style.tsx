
import styled from 'styled-components'

export const StyledTable = styled.div<any>`
  .table thead th {
    ${props => props.hideHeader ? 'display: none' : ''};
    border-top-color: transparent!important;
    border-left-color: transparent!important;
    border-right-color: transparent!important;
  }

  .card-header:first-child {
    border-radius: 0!important;
    border-bottom: #fff;
    margin-bottom: 30px;
  }

  .card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
    border-top: solid 2px rgba(0,0,0,.03);
    background-color: #fff;
  }
`;

import styled from 'styled-components'

export const StyledBadge = styled.div`
  .badge {
      display: inline;
    &-primary {
      background-color: #0168fa;
    }
    &-secondary {
      background-color: #7987a1;
    }
    &-success {
      background-color: #10b759;
    }
    &-danger {
      background-color: #dc3545;
    }
    &-warning {
      color: #1c273c;
      background-color: #ffc107;
    }
    &-info {
      background-color: #00b8d4;
    }
    &-light {
      color: #1c273c;
      background-color: #f4f5f8;
    }
    &-dark {
      color: #fff;
      background-color: #3b4863;
    }

    &code {
        color: #f10075
    }

    &-pill{
        background-radius: 5px;
    }
  }
`;
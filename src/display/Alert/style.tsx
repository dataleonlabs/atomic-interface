
import styled from 'styled-components'

export const StyledAlert = styled.div`
  .alert {
      border: none;
      border-radius: 2px;

      .Text {
          vertical-align: top;
      }

    &-primary {
      background-color: rgba(204, 229, 255, 0.5);
    }

    &-danger {
      background-color: rgba(248, 215, 218, 0.5);
    }

    &-success {
        background-color: rgba(212, 237, 218, 0.5);
    }
  }
`;
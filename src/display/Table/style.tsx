
import styled from 'styled-components'
const { Row, Cell } = require('@zendeskgarden/react-tables');

export const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
    ?  /* istanbul ignore next */ `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

export const DraggableCell = styled(Cell)`
  ${props =>
    props.isDragging
    ?  /* istanbul ignore next */ `
    display: inline-block !important;
  `
      : ''};
`;

export const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;

export const StyledNoContent = styled.div`
    text-align: center;
    padding: 15px;
    font-size: 14px;
`;
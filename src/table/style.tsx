
import styled from 'styled-components'
import { Row, Cell } from '@zendeskgarden/react-tables';

export const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

export const DraggableCell = styled(Cell)`
  ${props =>
    props.isDragging
      ? `
    display: inline-block !important;
  `
      : ''};
`;

export const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;
import styled from 'styled-components';
const { Row, Cell, HeaderRow } = require('@zendeskgarden/react-tables');
export const DraggableRow = styled(Row) `
  border-bottom: 1px solid #f6f6f6;
  ${props => props.isDraggingOver
    ? /* istanbul ignore next */ `
    :hover {
      background-color: inherit !important;
    }

    &:focus > div:first-child {
    box-shadow: inset 3px 0 0 0 #007bff!important;
    }
  `
    : ''};
`;
export const DraggableCell = styled(Cell) `
  ${props => props.isDragging
    ? /* istanbul ignore next */ `
    display: inline-block !important;
  `
    : ''};
`;
export const DraggableContainer = styled.div `
  :focus {
    outline: none;
  }
`;
export const StyledNoContent = styled.div `
    text-align: center;
    padding: 15px;
    font-size: 14px;
`;
export const StyledRow = styled(Row) `
  border-bottom: 1px solid #f5f5f5!important;
  &:focus > div:first-child {
    box-shadow: inset 3px 0 0 0 #007bff!important;
  }
`;
export const StyledHeaderRow = styled(HeaderRow) `
  border-bottom: 2px solid #f1f1f1!important;
`;
//# sourceMappingURL=style.js.map
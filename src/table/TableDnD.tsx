import React from 'react';
import styled from 'styled-components'
// const { zdSpacingSm } = require('@zendeskgarden/css-variables');
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const GripIcon = require('@zendeskgarden/svg-icons/src/12/grip.svg').default;
// const { XL } = require('@zendeskgarden/react-typography/src');

console.info(Draggable);
const {
    Table,
    // Caption,
    Head,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell
} = require('@zendeskgarden/react-tables');

const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

const DraggableCell = styled(Cell)`
  ${props =>
    props.isDragging
      ? `
    display: inline-block !important;
  `
      : ''};
`;

const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;

const getItems = (count: any) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class DraggableExample extends React.Component<{}, { items: any[]}> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    const items = reorder(this.state.items, result.source.index, result.destination.index);

    this.setState(
      {
        items
      },
      () => {
          const elt = document.getElementById(result.draggableId);
          if (elt) {
              elt.focus();
          }
      }
    );
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Table className={'table'}>
          <Head>
            <HeaderRow>
              <HeaderCell minimum />
              <HeaderCell width="25%">Subject</HeaderCell>
              <HeaderCell width="25%">Requester</HeaderCell>
              <HeaderCell width="25%">Requested</HeaderCell>
              <HeaderCell width="25%">Type</HeaderCell>
            </HeaderRow>
          </Head>
          <Droppable droppableId="droppable">
                    {(provided: any, droppableSnapshot: any) => {
              return (
                <Body ref={provided.innerRef} isDraggingOver={droppableSnapshot.isDraggingOver}>
                      {this.state.items.map((item: any, index: any) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided: any, snapshot: any) => (
                        <DraggableRow
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}

                          isDragging={snapshot.isDragging}
                          isDraggingOver={droppableSnapshot.isDraggingOver}
                          hovered={snapshot.isDragging}
                          focused={
                            droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                          }
                          {...provided.draggableProps.style}
                          {...provided.draggableProps}
                        >
                            <>
                          <DraggableCell minimum>
                            <DraggableContainer id={item.id} {...provided.dragHandleProps}>
                              ::
                            </DraggableContainer>
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            {item.content}
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            John Smith
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            15 minutes ago
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            Ticket
                          </DraggableCell>
                          </>
                        </DraggableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Body>
              );
            }}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}
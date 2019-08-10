import * as React from 'react'
import * as enzyme from 'enzyme'
import Table from './index'
import Column from './Column'
import ContentLoader from 'react-content-loader'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  StyledNoContent
} from './style'

import {
  DraggableRow,
  DraggableCell,
  DraggableContainer
} from './style'


const {
  Table: TableBase,
  Head,
  HeaderCell,
  SortableCell,
  Body,
  Row,
  Cell
} = require('@zendeskgarden/react-tables');
const { Pagination } = require('@zendeskgarden/react-pagination');

describe('<Table />', () => {
  it('U-TEST-1 - test simple table', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(3)
    expect(wrapper.find(Cell)).toHaveLength(3)
    expect(wrapper.find(Row)).toHaveLength(1)
  })

  it('U-TEST-2 - test stripped', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} striped={true}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(3)
    expect(wrapper.find(Cell)).toHaveLength(3)
    expect(wrapper.find(Row)).toHaveLength(1)
    expect(wrapper.props().striped).toEqual(true)
  })

  it('U-TEST-3 - test size large', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'large'}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(3)
    expect(wrapper.find(Cell)).toHaveLength(3)
    expect(wrapper.find(Row)).toHaveLength(1)
    expect(wrapper.props().rowSize).toEqual('large')
  })

  it('U-TEST-4 - test size small', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'small'}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(3)
    expect(wrapper.find(Cell)).toHaveLength(3)
    expect(wrapper.find(Row)).toHaveLength(1)
    expect(wrapper.props().rowSize).toEqual('small')
  })

  it('U-TEST-5 - test disabledSelected', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'small'} disabledSelected={[1]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(3)
    expect(wrapper.find(Cell)).toHaveLength(3)
    expect(wrapper.find(Row)).toHaveLength(1)
    expect(wrapper.props().disabledSelected).toEqual([1])
  })

  it('U-TEST-6 - test hide header', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'small'} hideHeader={true}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(0)
  })

  it('U-TEST-7 - test sortable', () => {
    const wrapper = enzyme.mount(
      <Table sortable={true} data={[{ id: 1 }]} rowSize={'small'} disabledSelected={[1]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(3)
    expect(wrapper.find(Cell)).toHaveLength(3)
    expect(wrapper.find(SortableCell)).toHaveLength(3)
  })

  it('U-TEST-8 - test selectable', () => {
    const wrapper = enzyme.mount(
      <Table selectable={true} sortable={true} data={[{ id: 1 }]} rowSize={'small'} disabledSelected={[1]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(4)
    expect(wrapper.find(Cell)).toHaveLength(4)
    expect(wrapper.find(SortableCell)).toHaveLength(3)
  })

  it('U-TEST-9 - test draggable', () => {
    const wrapper = enzyme.mount(
      <Table selectable={true} draggable={true} data={[{ id: 1 }, { id: 2 }]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(5)
    expect(wrapper.find(DragDropContext)).toHaveLength(1)
    expect(wrapper.find(Droppable)).toHaveLength(1)
    expect(wrapper.find(Draggable)).toHaveLength(2)
    expect(wrapper.find(DraggableRow)).toHaveLength(2)
    expect(wrapper.find(DraggableCell)).toHaveLength(10) // rows + dots
    expect(wrapper.find(DraggableContainer)).toHaveLength(2) // dots
  })

  it('U-TEST-10 - test empty', () => {
    const wrapper = enzyme.mount(
      <Table draggable={true} data={[]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(StyledNoContent)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)
    expect(wrapper.find(DraggableCell)).toHaveLength(0) // rows + dots
    expect(wrapper.find(Draggable)).toHaveLength(0)
  })

  it('U-TEST-11 - test pagination', () => {
    const wrapper = enzyme.mount(
      <Table draggable={true} data={[]} pagination={{ currentPage: 1, total: 10 }}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)
    expect(wrapper.find(DraggableCell)).toHaveLength(0) // rows + dots
    expect(wrapper.find(Draggable)).toHaveLength(0)
    expect(wrapper.find(Pagination)).toHaveLength(1)
  })

  it('U-TEST-12 - test loading', () => {
    const wrapper = enzyme.mount(
      <Table loading={true} selectable={true} draggable={true} data={[{ id: 1 }, { id: 2 }]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(0)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(HeaderCell)).toHaveLength(5)
    expect(wrapper.find(Draggable)).toHaveLength(0)
    expect(wrapper.find(DraggableContainer)).toHaveLength(0)
    expect(wrapper.find(ContentLoader)).toHaveLength(1)
    
  })
})
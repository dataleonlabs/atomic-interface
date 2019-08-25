import * as React from 'react'
import * as enzyme from 'enzyme'
import Table from './index'
import { Grid, VirtualTable as TableBase, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import Column from './Column'
import { SortingState, SelectionState } from '@devexpress/dx-react-grid';


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
    expect(wrapper.find(Grid)).toHaveLength(1)
    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(TableHeaderRow)).toHaveLength(1)
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
    expect(wrapper.find(Grid)).toHaveLength(1)
    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(TableHeaderRow)).toHaveLength(1)
    expect(wrapper.props().striped).toEqual(true)
  })

  it('U-TEST-3 - test align', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} striped={true}>
        <Column align="right" field="id">Id</Column>
        <Column field="firstName">First Name</Column>
        <Column field="lastName">Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Grid)).toHaveLength(1)
    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(TableHeaderRow)).toHaveLength(1)
    expect(wrapper.props().striped).toEqual(true)
  })

  it('U-TEST-4 - test disabledSelected', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'small'} disabledSelected={[1]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.props().disabledSelected).toEqual([1])
  })

  it('U-TEST-5 - test hide header', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'small'} hideHeader={true}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
  })

  it('U-TEST-6 - test sortable', () => {
    const wrapper = enzyme.mount(
      <Table sortable={true} data={[{ id: 1 }]} rowSize={'small'} disabledSelected={[1]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Grid)).toHaveLength(1)
    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(TableHeaderRow)).toHaveLength(1)
    expect(wrapper.find(SortingState)).toHaveLength(1)
  })

  it('U-TEST-7 - test selectable', () => {
    const wrapper = enzyme.mount(
      <Table selectable={true} sortable={true} data={[{ id: 1 }]} rowSize={'small'} disabledSelected={[1]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Grid)).toHaveLength(1)
    expect(wrapper.find(TableBase)).toHaveLength(1)
    expect(wrapper.find(Column)).toHaveLength(0)
    expect(wrapper.find(TableHeaderRow)).toHaveLength(1)
    expect(wrapper.find(SortingState)).toHaveLength(1)
    expect(wrapper.find(SelectionState)).toHaveLength(1)
  })

  it('U-TEST-8 - test empty', () => {
    const wrapper = enzyme.mount(
      <Table draggable={true} data={[]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )
    expect(wrapper.find(TableBase)).toHaveLength(1)
  })

  // it('U-TEST-11 - test pagination', () => {
  //   const wrapper = enzyme.mount(
  //     <Table draggable={true} data={[]} pagination={{ currentPage: 1, total: 10 }}>
  //       <Column field={'id'}>Id</Column>
  //       <Column field={'firstName'}>First Name</Column>
  //       <Column field={'lastName'}>Last Name</Column>
  //     </Table>
  //   )

  //   expect(wrapper.find(TableBase)).toHaveLength(1)
  //   expect(wrapper.find(Head)).toHaveLength(1)
  //   expect(wrapper.find(Body)).toHaveLength(1)
  //   expect(wrapper.find(DraggableCell)).toHaveLength(0) // rows + dots
  //   expect(wrapper.find(Draggable)).toHaveLength(0)
  //   expect(wrapper.find(Pagination)).toHaveLength(1)
  // })

  it('U-TEST-10 - Test loading', () => {
    const wrapper = enzyme.mount(
      <Table loading={true} selectable={true} data={[{ id: 1 }, { id: 2 }]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )
    expect(wrapper.find(TableBase)).toHaveLength(1)
  })
})
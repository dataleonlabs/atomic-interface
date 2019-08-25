import * as React from 'react'
import * as enzyme from 'enzyme'
import Table from './index'
import { Grid, VirtualTable as TableBase, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import Column from './Column'
import { SortingState, SelectionState } from '@devexpress/dx-react-grid';
const {
  Head,
  Body,
} = require('@zendeskgarden/react-tables');

describe('<Table />', () => {
  it('U-TEST-01 - Simple Table', () => {
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

  it('U-TEST-02 - Stripped', () => {
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

  it('U-TEST-03 - Align', () => {
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

  it('U-TEST-04 - Disabled Selected', () => {
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

  it('U-TEST-05 - Hide Header', () => {
    const wrapper = enzyme.mount(
      <Table data={[{ id: 1 }]} rowSize={'small'} hideHeader={true}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
  })

  it('U-TEST-06 - Sortable', () => {
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

  it('U-TEST-07 - Selectable', () => {
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

  it('U-TEST-08 - Empty', () => {
    const wrapper = enzyme.mount(
      <Table data={[]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
  })

  it('U-TEST-09 - Paging', () => {
    const wrapper = enzyme.mount(
      <Table data={[]} pagination={{ currentPage: 1, total: 10 }}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(TableBase)).toHaveLength(1)
  })

  it('U-TEST-10 - Loading', () => {
    const wrapper = enzyme.mount(
      <Table loading={true} selectable={true} data={[{ id: 1 }, { id: 2 }]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )
    expect(wrapper.find(TableBase)).toHaveLength(1)
  })

  it('U-TEST-11 - Fork Draggable', () => {
    const wrapper = enzyme.mount(
      <Table draggable={true} data={[]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )
    expect(wrapper.find(Head)).toHaveLength(1)
    expect(wrapper.find(Body)).toHaveLength(1)
  })
})
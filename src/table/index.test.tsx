import * as React from 'react'
import * as enzyme from 'enzyme'
import BootstrapTable from 'react-bootstrap-table-next';
import Table from './index'
import Column from './Column'

describe('<Table />', () => {
  it('U-TEST-1 - test simple table', () => {
    const wrapper = enzyme.mount(
      <Table data={[]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(BootstrapTable)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)

    // Testing data
    expect((
      wrapper.find(BootstrapTable).props() as { columns: object[]}
    ).columns)
    .toEqual([
      { dataField: 'id', text: 'Id'},
      { dataField: 'firstName', text: 'First Name' },
      { dataField: 'lastName', text: 'Last Name' },
    ])
  })

  it('U-TEST-2 - test simple with formater', () => {
    const formatter = (cell: string, row: string) => {
      return <span>{row}</span>;
    };

    const wrapper = enzyme.mount(
      <Table data={[]}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'} formatter={formatter}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(BootstrapTable)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)

    // Testing data
    expect((
      wrapper.find(BootstrapTable).props() as { columns: object[] }
    ).columns)
      .toEqual([
        { dataField: 'id', text: 'Id' },
        { dataField: 'firstName', text: 'First Name' },
        { dataField: 'lastName', text: 'Last Name', formatter },
      ])
  })

  it('U-TEST-3 - test with select column', () => {
    const wrapper = enzyme.mount(
      <Table data={[]} selectable={true}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )

    expect(wrapper.find(BootstrapTable)).toHaveLength(1)

    // Not used in compilaton
    expect(wrapper.find(Column)).toHaveLength(0)

    // Check select row display
    expect(wrapper.find('.table .selection-input-4')).toHaveLength(2);

    // Testing data
    expect((
      wrapper.find(BootstrapTable).props() as { columns: object[] }
    ).columns)
      .toEqual([
        { dataField: 'id', text: 'Id' },
        { dataField: 'firstName', text: 'First Name' },
        { dataField: 'lastName', text: 'Last Name' },
      ])
  })

  it('U-TEST-4 - test hide coloumn', () => {
    const wrapper = enzyme.mount(
      <Table data={[]} selectable={true} hideHeader={true}>
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </Table>
    )
    expect(wrapper.find('.table .HideHeader')).toHaveLength(2);

  })
})
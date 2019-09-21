require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as React from 'react'
import * as enzyme from 'enzyme'
import TableCollection from './Collection'
import Column from './Column'
const gb = global as any;

describe('<TableCollection />', () => {
  it('U-TEST-1 - Simple table', () => {

    gb.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, _) => {
        resolve({
          status: 200,
          json() {
            return { data: [{ id: 1, name: 'Title' }] };
          },
        });
      });
    });

    const wrapper = enzyme.mount(
      <TableCollection apiKey="xxx" apiUrl="test"
          type="findAll"
          model="Playlist"
      >
        <Column field={'id'}>Id</Column>
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
      </TableCollection>
    )

    expect(wrapper.find(TableCollection)).toHaveLength(1)
    expect(wrapper.find(Column)).toHaveLength(0) // wait rendering
  })
})
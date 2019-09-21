require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as React from 'react'
import * as enzyme from 'enzyme'
import SwitchCollection from './Collection'
import sinon from 'sinon';
import Form from './../../index'

const gb = global as any;

describe('<SwitchCollection />', () => {
  it('U-TEST-1 - Testing switch collection', () => {
    const event = sinon.spy() as any;
    // Mock fetch data
    gb.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, _) => {
        resolve({
          status: 200,
          json() {
            return { data: { id: 1, name: 'Title' } };
          },
        });
      });
    });

    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <SwitchCollection
            apiKey="xxx"
            apiUrl="test"
            type="update"
            model="Playlist"
            name="switch1"
            label="Switch Collection"
            fieldId={{ key: "id", value: "1" }}
            fieldUpdate="active"
            onLoading={event}
            onLoaded={event}
            onError={event}>
          </SwitchCollection>
        )}
      </Form>
    )

    expect(wrapper.find(SwitchCollection)).toHaveLength(1);
  })
})
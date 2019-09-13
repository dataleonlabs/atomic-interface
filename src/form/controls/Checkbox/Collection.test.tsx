import 'whatwg-fetch';
import * as React from 'react'
import * as enzyme from 'enzyme'
import CheckboxCollection from './Collection'
import sinon from 'sinon';
import Form from './../../index'

const gb = global as any;

describe('<CheckboxCollection />', () => {
  it('U-TEST-1 - Testing checkbox collection', () => {
    const event = sinon.spy() as any;
    // Mock fetch data
    gb.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, _) => {
        resolve({
          status: 200,
          json() {
            //return { data: { id: 1, name: 'Title' } };
          },
        });
      });
    });

    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <CheckboxCollection
            apiKey="xxx"
            apiUrl="test"
            type="update"
            model="Playlist"
            label="Checkbox Collection"
            name="chk1"
            fieldId={{ key: "id", value: "1" }}
            fieldUpdate="active"
            onLoading={event}
            onLoaded={event}
            onError={event}>
          </CheckboxCollection>
        )}
      </Form>

    )

    expect(wrapper.find(CheckboxCollection)).toHaveLength(1);
  })
})
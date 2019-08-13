import 'whatwg-fetch';
import * as React from 'react'
import * as enzyme from 'enzyme'
import ButtonCollection from './Collection'
import sinon from 'sinon';

const gb = global as any;

describe('<ButtonCollection />', () => {
  it('U-TEST-1 - Testing button collection', () => {
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
      <ButtonCollection
        apiKey="xxx"
        apiUrl="test"
        type="findAll"
        model="Playlist"
        where={{ name: "test"}}
        onLoading={event}
        onLoaded={event}
        onError={event}
      >
        primary
      </ButtonCollection>
    )

    expect(wrapper.find(ButtonCollection)).toHaveLength(1);
  })
})
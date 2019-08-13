import 'whatwg-fetch';
import * as React from 'react'
import * as enzyme from 'enzyme'
import Query from './index'
import sinon from 'sinon';

const gb = global as any;

describe('<Query />', () => {
  it('U-TEST-1 - Testing query component', () => {
    const response = sinon.spy() as any;
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
      <Query
        apiKey="xxx"
        apiUrl="test"
        type="findAll"
        model="Playlist"
        where={{ name: "test"}}
        onLoading={event}
        onLoaded={event}
        onError={event}
      >
        {response}
      </Query>
    )

    expect(wrapper.find(Query)).toHaveLength(1);
    expect(response).toHaveProperty('callCount', 1);
    expect(event).toHaveProperty('callCount', 1);
  })
})
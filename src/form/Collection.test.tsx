import 'whatwg-fetch';
import * as React from 'react'
import * as enzyme from 'enzyme'
import FormCollection from './Collection'
import sinon from 'sinon';
import Input from './controls/Input';
import Textarea from './controls/Textarea';
import { act } from 'react-dom/test-utils';

const gb = global as any;

describe('<FormCollection />', () => {
  it('U-TEST-1 - Testing form collection', () => {
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

    act(() => {
      const wrapper = enzyme.mount(
        <FormCollection
          apiKey="xxx"
          apiUrl="test"
          id={'test'}
          type="findAll"
          model="Playlist"
          where={{ name: "test" }}
          onLoading={event}
          onLoaded={event}
          onError={event}
        >
          {(_: any) => (
            <>
              <Input name='text' maxRows={20} />
              <Textarea name='text' maxRows={20} label={'text'} />
            </>
          )}
        </FormCollection>
      )
      expect(wrapper.find(FormCollection)).toHaveLength(1);
    })
  })
})
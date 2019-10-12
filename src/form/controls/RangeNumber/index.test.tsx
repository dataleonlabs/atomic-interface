import * as React from 'react'
import * as enzyme from 'enzyme'
import RangeInput from './index'
import { Input } from 'reactstrap';
import Form from './../../index'

describe('<RangeInput />', () => {
  it('U-TEST-1 - Range Input Number', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RangeInput            
            name={'number_range'}
            label={'Enter Number Range'}
            minPlaceholder='Start Range'
            maxPlaceholder='End Range'
          />
        )}
      </Form>
    )

    expect(wrapper.find(Input)).toHaveLength(1);
  })
})
import * as React from 'react'
import * as enzyme from 'enzyme'
import RangeDate from './index'
import { Input } from 'reactstrap';
import Form from './../../index'

describe('<RangeDate />', () => {
  it('U-TEST-1 - RangeDate', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RangeDate            
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
  
  it('U-TEST-1 - Initial value', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RangeDate
            name={'number_range'}
            label={'Enter Number Range'}
            minPlaceholder='Start Range'
            maxPlaceholder='End Range'
          />
        )}
      </Form>
    )

    expect(wrapper.find('input').get(0).props('value')).toEqual(...);
  })
})
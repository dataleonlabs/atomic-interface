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
            nameMin={'min1'}
            nameMax={'max1'}
            label={'Enter Number Range'}
            minPlaceholder='Start Range'
            maxPlaceholder='End Range'
          />
        )}
      </Form>
    )

    expect(wrapper.find(Input)).toHaveLength(2);
  })

  it('U-TEST-1 - Initial value', () => {
    const wrapper = enzyme.mount(
      <Form
        initialValues={{ number_range: { min: 100, max: 250 } }} >
        {(_) => (
          <RangeInput
            name={'number_range'}
            nameMin={'min1'}
            nameMax={'max1'}
            label={'Enter Number Range'}
            minPlaceholder='Start Range'
            maxPlaceholder='End Range'
          />
        )}
      </Form >
    )

    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Input).get(0).props.name).toContain('min1');
    //expect(wrapper.find(Input).get(0).props.value).toEqual(100);
  })
})
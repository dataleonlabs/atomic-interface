import * as React from 'react'
import * as enzyme from 'enzyme'
import RangeDate from './index'
import ReactDatePicker from "react-datepicker";
import Form from './../../index'

describe('<RangeDate />', () => {
  it('U-TEST-1 - RangeDate', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RangeDate
            name={'date_range'}
            nameMin={'min1'}
            nameMax={'max1'}
            label={'Enter Number Range'}
            minPlaceholder='Start Range'
            maxPlaceholder='End Range'
          />
        )}
      </Form>
    )

    expect(wrapper.find(ReactDatePicker)).toHaveLength(2);
  })

  it('U-TEST-1 - Initial value', () => {
    const wrapper = enzyme.mount(
      <Form
        initialValues={{ date_range: { min: new Date("2019-09-30T13:38:28.000Z"), max: new Date("10/12/2019") } }}>
        {(_) => (
          <RangeDate
            name={'date_range'}
            nameMin={'min1'}
            nameMax={'max1'}
            label={'Enter Number Range'}
            minPlaceholder='Start Range'
            maxPlaceholder='End Range'
          />
        )}
      </Form>
    )

    expect(wrapper.find(ReactDatePicker)).toHaveLength(2);
    expect(wrapper.find(ReactDatePicker).get(0).props.id).toContain('min1');
    expect(wrapper.find(ReactDatePicker).get(0).props.selected).toEqual(new Date("2019-09-30T13:38:28.000Z"));
  })
})
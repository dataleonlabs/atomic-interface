import * as React from 'react'
import * as enzyme from 'enzyme'
import DatePicker from './index';
import ReactDatePicker from 'react-datepicker'
import Form from './../../index'

describe('<DatePicker />', () => {
  it('U-TEST-1 - Test Example', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <DatePicker name="datepicker" label="Birth Date" />
        )}
      </Form>
    )
    expect(wrapper.find(ReactDatePicker)).toHaveLength(1)
  })   
})
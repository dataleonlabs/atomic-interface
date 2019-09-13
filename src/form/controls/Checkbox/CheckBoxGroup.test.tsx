import * as React from 'react'
import * as enzyme from 'enzyme'
import CheckBoxGroup from './CheckBoxGroup'
// import { CustomInput } from 'reactstrap';
import Form from './../../index'

describe('<CheckBoxGroup />', () => {
  it('U-TEST-1 - Label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <CheckBoxGroup name="stories" label='this is demo' options={['demo1', 'demo2', 'demo3']} />
        )}
      </Form>
    )
    expect(wrapper.find(CheckBoxGroup)).toHaveLength(1)
  })

})
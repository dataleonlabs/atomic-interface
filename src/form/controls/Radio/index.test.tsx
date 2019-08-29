import * as React from 'react'
import * as enzyme from 'enzyme'
import Radio from './index'
import { CustomInput } from 'reactstrap';
import Form from './../../index'

describe('<Radio />', () => {
  it('U-TEST-1 - Label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Radio
            name={'test'}
            label={'test'}
            disabled={false}
          />
          
        )}
      </Form>
    )
    expect(wrapper.find(CustomInput)).toHaveLength(1)
  })

  it('U-TEST-2 - Disabled ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Radio name={'test'} disabled={true} />
        )}
      </Form>
    )

    expect(wrapper.find(CustomInput)).toHaveLength(1)
  })

  it('U-TEST-3 - Tooltip Beside Label ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Radio
          name={'test'}
          label={'test'}
          disabled={false}
        />
        )}
      </Form>
    )    
    expect(wrapper.find(CustomInput)).toHaveLength(1)
  })
})
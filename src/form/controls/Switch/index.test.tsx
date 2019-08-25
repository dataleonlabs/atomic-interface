import * as React from 'react'
import * as enzyme from 'enzyme'
import Switch from './index'
import { CustomInput } from 'reactstrap';
import Form from './../../index'

describe('<Switch />', () => {
  it('U-TEST-1 Switch render with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Switch
            name={'test'}
            label={'test'}
            disabled={false}
          />
          
        )}
      </Form>
    )
    expect(wrapper.find(CustomInput)).toHaveLength(1)
  })

  it('U-TEST-2 Switch render with disabled ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Switch name={'test'} disabled={true} />
        )}
      </Form>
    )

    expect(wrapper.find(CustomInput)).toHaveLength(1)

  })
})
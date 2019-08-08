import * as React from 'react'
import * as enzyme from 'enzyme'
import Checkbox from './index'
import { Label } from 'reactstrap';
import Form from './../../index'

describe('<Checkbox />', () => {
  it('U-TEST-1 - test checkbox render with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Checkbox name={'test'} disabled={false} />
        )}
      </Form>
    )
    expect(wrapper.find(Label)).toHaveLength(1)
  })

  it('U-TEST-2 - test checkbox render with disabled ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Checkbox name={'test'} disabled={true} />
        )}
      </Form>
    )
    expect(wrapper.find(Label)).toHaveLength(1)
  })

  it('U-TEST-3 - test render with tooltip beside label ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Checkbox name={'test'} disabled={false} />
        )}
      </Form>
    )
    expect(wrapper.find(Label)).toHaveLength(1)
  })
})
import * as React from 'react'
import * as enzyme from 'enzyme'
import Switch from './index'
import { Label } from 'reactstrap';
import Form from './../../index'

describe('<Switch />', () => {
  it('U-TEST-1 - test Switch render with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Switch
            name={'test'}
            label={'test'}
            disabled={false}
          />
          
        )}
      </Form>
    )
    expect(wrapper.find(Label)).toHaveLength(1)
  })

  it('U-TEST-2 - test Switch render with disabled ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Switch name={'test'} disabled={true} />
        )}
      </Form>
    )

    expect(wrapper.find(Label)).toHaveLength(0)

  })
})
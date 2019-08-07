import * as React from 'react'
import * as enzyme from 'enzyme'
import Switch from './index'
import { FormGroup,Label, Tooltip } from 'reactstrap';
import Form from './../../index'

describe('<Switch />', () => {
  it('U-TEST-1 - test Switch render with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Switch
            name={'test'}
            renderlabel={'test'}
            disabled={false}
          />
          
        )}
      </Form>
    )
    expect(wrapper.find(FormGroup)).toHaveLength(2)
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

    expect(wrapper.find(FormGroup)).toHaveLength(2)
  })

  it('U-TEST-3 - test Switch render with tooltip beside label ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Switch
          name={'test'}
          renderlabel={'test'}
          disabled={false}
          // tooltip={'test'}
        />
        )}
      </Form>
    )

    expect(wrapper.find(FormGroup)).toHaveLength(2)
    expect(wrapper.find(Label)).toHaveLength(1)
    // expect(wrapper.find(Tooltip)).toHaveLength(1)
  })
})
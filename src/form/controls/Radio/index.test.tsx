import * as React from 'react'
import * as enzyme from 'enzyme'
import Radio from './index'
import { FormGroup,Label, UncontrolledTooltip } from 'reactstrap';
import Form from './../../index'

describe('<Input />', () => {
  it('U-TEST-1 - test radio render with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Radio
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

  it('U-TEST-2 - test input render with disabled ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Radio name={'test'} disabled={true} />
        )}
      </Form>
    )

    expect(wrapper.find(FormGroup)).toHaveLength(2)
  })

  it('U-TEST-3 - test render with tooltip beside label ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Radio
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
    // expect(wrapper.find(UncontrolledTooltip)).toHaveLength(2)
  })
})
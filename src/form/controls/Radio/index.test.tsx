import * as React from 'react'
import * as enzyme from 'enzyme'
import Radio from './index'
import { CustomInput } from 'reactstrap';
import Form from './../../index'

describe('<Radio />', () => {
  it('U-TEST-1 - test radio render with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
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

  it('U-TEST-2 - test input render with disabled ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Radio name={'test'} disabled={true} />
        )}
      </Form>
    )

    expect(wrapper.find(CustomInput)).toHaveLength(1)
  })

  it('U-TEST-3 - test render with tooltip beside label ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
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
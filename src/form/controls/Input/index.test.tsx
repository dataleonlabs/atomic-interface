import * as React from 'react'
import * as enzyme from 'enzyme'
import Input from './index'
import { InputGroup, InputGroupAddon } from 'reactstrap';
import Form from './../../index'

describe('<Input />', () => {
  it('U-TEST-1 - test input render with addon', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Input
            name={'email'}
            leftAddon={'test'}
            rightAddon={'test'}
          />
        )}
      </Form>
    )

    expect(wrapper.find(InputGroup)).toHaveLength(1)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(2)
  })

  it('U-TEST-2 - test input render with addon left ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Input name={'email'} leftAddon={'test'} />
        )}
      </Form>
    )

    expect(wrapper.find(InputGroup)).toHaveLength(1)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(1)
  })

  it('U-TEST-3 - test input render without addon ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Input name={'email'} />
        )}
      </Form>
    )

    expect(wrapper.find(InputGroup)).toHaveLength(0)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(0)
  })
})
import * as React from 'react'
import * as enzyme from 'enzyme'
import InputRender from './InputRender'
import { InputGroup, InputGroupAddon } from 'reactstrap';

describe('<InputRender />', () => {
  it('U-TEST-1 - test input render with addon', () => {
    const wrapper = enzyme.mount(
      <InputRender
        field={{
          left: 'test',
          right: 'test'
        }}
      />
    )

    expect(wrapper.find(InputGroup)).toHaveLength(1)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(2)
  })

  it('U-TEST-2 - test input render with addon left ', () => {
    const wrapper = enzyme.mount(
      <InputRender
        field={{
          left: 'test',
        }}
      />
    )

    expect(wrapper.find(InputGroup)).toHaveLength(1)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(1)
  })

  it('U-TEST-3 - test input render without addon ', () => {
    const wrapper = enzyme.mount(
      <InputRender
        field={{}}
      />
    )

    expect(wrapper.find(InputGroup)).toHaveLength(0)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(0)
  })
})
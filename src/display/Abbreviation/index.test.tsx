import * as React from 'react'
import * as enzyme from 'enzyme'
import Abbreviation from './index'

describe('<Abbreviation />', () => {
  it('U-TEST-1 - One and Two', () => {
    const wrapper = enzyme.mount(
      <Abbreviation>hello test</Abbreviation>
    )
    expect(wrapper.find(Abbreviation)).toHaveLength(1);
  })

  it('U-TEST-2 - One Only', () => {
    const wrapper = enzyme.mount(
      <Abbreviation>hello test</Abbreviation>
    )
    expect(wrapper.find(Abbreviation)).toHaveLength(1);
  })

  it('U-TEST-3 - One And One Word', () => {
    const wrapper = enzyme.mount(
      <Abbreviation>hello</Abbreviation>
    )
    expect(wrapper.find(Abbreviation)).toHaveLength(1);
  })
})
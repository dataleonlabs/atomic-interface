import * as React from 'react'
import * as enzyme from 'enzyme'
import Abbreviation from './index'

describe('<Abbreviation />', () => {
  it('U-TEST-1 - test with one and two', () => {
    const wrapper = enzyme.mount(
      <Abbreviation>hello test</Abbreviation>
    )
    expect(wrapper.find(Abbreviation)).toHaveLength(1);
  })

  it('U-TEST-2 - test with one only', () => {
    const wrapper = enzyme.mount(
      <Abbreviation>hello test</Abbreviation>
    )
    expect(wrapper.find(Abbreviation)).toHaveLength(1);
  })

  it('U-TEST-3 - test with one and one word', () => {
    const wrapper = enzyme.mount(
      <Abbreviation>hello</Abbreviation>
    )
    expect(wrapper.find(Abbreviation)).toHaveLength(1);
  })
})
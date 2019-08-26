import * as React from 'react'
import * as enzyme from 'enzyme'
import Avatar from './index'

describe('<Avatar />', () => {
  it('U-TEST-1 - One and two', () => {
    const wrapper = enzyme.mount(
      <>
      <Avatar />
      <Avatar />
      </>
    )
    expect(wrapper.find(Avatar)).toHaveLength(2);
  })

  it('U-TEST-2 - Image', () => {
    const wrapper = enzyme.mount(
      <Avatar />
    )
    expect(wrapper.find(Avatar)).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  })
})
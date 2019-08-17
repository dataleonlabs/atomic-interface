import * as React from 'react'
import * as enzyme from 'enzyme'
import Profil from './index'

describe('<Profil />', () => {
  it('U-TEST-1 - test with one and two', () => {
    const wrapper = enzyme.mount(
      <>
      <Profil />
      <Profil />
      </>
    )
    expect(wrapper.find(Profil)).toHaveLength(2);
  })

  it('U-TEST-2 - test image', () => {
    const wrapper = enzyme.mount(
      <Profil />
    )
    expect(wrapper.find(Profil)).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  })
})
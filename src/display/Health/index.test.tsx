import * as React from 'react'
import * as enzyme from 'enzyme'
import Health from './index'
import { StyledHealth } from './style';

describe('<health />', () => {
  it('U-TEST-1 - Test Rendering', () => {
    const wrapper = enzyme.mount(
      <Health size="md" color="failure">Failure</Health>
    )
    expect(wrapper.find(StyledHealth)).toHaveLength(1);      
  })
})
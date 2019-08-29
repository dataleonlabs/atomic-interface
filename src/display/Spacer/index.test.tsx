import * as React from 'react'
import * as enzyme from 'enzyme'
import Spacer from './index'
import { StyledSpacer } from './style'

describe('<Spacer />', () => {
  it('U-TEST-1 - Test Rendering', () => {
    const wrapper = enzyme.mount(
      <Spacer size="sm" />
    )
    expect(wrapper.find(StyledSpacer)).toHaveLength(1);
  })
})
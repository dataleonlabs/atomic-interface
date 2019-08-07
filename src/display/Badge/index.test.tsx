import * as React from 'react'
import * as enzyme from 'enzyme'
import Badge from './index'
import { Badge as strapBadge } from 'reactstrap';

describe('<Badge />', () => {
  it('U-TEST-1 - badge render with color primary', () => {
    const wrapper = enzyme.mount(
      <Badge color="primary"  />
    )
    expect(wrapper.find(strapBadge)).toHaveLength(1);
    expect(wrapper.props().color).toEqual('primary');
  })
  
  it('U-TEST-2 - alert rendering with pill', () => {
    const wrapper = enzyme.mount(
      <Badge color="primary" pill={true} />
      )
      
      expect(wrapper.find(strapBadge)).toHaveLength(1);
      expect(wrapper.props().pill).toEqual(true);
  })

})
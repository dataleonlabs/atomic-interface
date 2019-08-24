import * as React from 'react'
import * as enzyme from 'enzyme'
import Alert from './index'
import { Alert as strapAlert } from 'reactstrap';
import { Info } from 'react-feather';

describe('<Alert />', () => {
  it('U-TEST-1 - alert render with icon true', () => {
    const wrapper = enzyme.mount(
      <Alert icon={true} color="primary"> Demo Of Alert Box with Icon</Alert>
    )
    expect(wrapper.find(strapAlert)).toHaveLength(1);
    expect(wrapper.props().icon).toEqual(true);
    expect(wrapper.find(Info)).toHaveLength(1)
  })
  
  it('U-TEST-2 - alert render with icon false', () => {
    const wrapper = enzyme.mount(
      <Alert icon={false} color="primary"> Demo Of Alert Box with Icon</Alert>
      )
      
      expect(wrapper.find(strapAlert)).toHaveLength(1);
      expect(wrapper.props().icon).toEqual(false);
  })

  it('U-TEST-3 - alert render with color is primary', () => {
    const wrapper = enzyme.mount(
      <Alert icon={false} color="primary"> Demo Of Alert Box with Icon</Alert>
      )
      
      expect(wrapper.find(strapAlert)).toHaveLength(1);
      expect(wrapper.props().color).toEqual('primary');
  })
})
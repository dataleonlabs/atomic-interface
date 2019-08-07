import * as React from 'react'
import * as enzyme from 'enzyme'
import Spinner from './index'
import { Spinner as StrapSpinner } from 'reactstrap';

describe('<Spinner/>', () => {

  it('U-TEST-1 - Spinner render', () => {
    const wrapper = enzyme.mount(
      <Spinner type="grow" color="primary" />
    );
    expect(wrapper.find(StrapSpinner)).toHaveLength(1);
    expect(wrapper.props().type).toEqual('grow');
    expect(wrapper.props().color).toEqual('primary');
  })

})
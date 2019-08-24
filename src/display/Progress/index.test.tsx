import * as React from 'react'
import * as enzyme from 'enzyme'
import Progress from './index'
import { Progress as StrapProgress } from 'reactstrap';

describe('<Progress/>', () => {

  it('U-TEST-1 - Progress render', () => {
    const wrapper = enzyme.mount(
      <Progress value={25} />
    );
    expect(wrapper.find(StrapProgress)).toHaveLength(1);
    expect(wrapper.props().value).toEqual(25);
  })

  it('U-TEST-2 - Progress render with 60%', () => {
    const wrapper = enzyme.mount(
      <Progress value={60} />
    );
    expect(wrapper.find(StrapProgress)).toHaveLength(1);
    expect(wrapper.props().value).toEqual(60);
  })

})
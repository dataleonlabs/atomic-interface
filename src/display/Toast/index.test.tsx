import * as React from 'react'
import * as enzyme from 'enzyme'
import Toast from './index'
import { Toast as StrapToast } from 'reactstrap';

describe('<Toast/>', () => {

  it('U-TEST-1 - Toast', () => {
    const wrapper = enzyme.mount(
      <Toast>
        This is a toast with a success icon — check it out!
      </Toast>
    );
    expect(wrapper.find(StrapToast)).toHaveLength(1);
  })

})
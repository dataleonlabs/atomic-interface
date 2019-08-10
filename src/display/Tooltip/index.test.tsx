import * as React from 'react'
import * as enzyme from 'enzyme'
import Tooltip from './index'
import { Tooltip as StrapTooltip, Button } from 'reactstrap';

describe('<Toast/>', () => {

  it('U-TEST-1 - Toast rendering right on hover', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = enzyme.mount(
      <>
      <Button color="secondary" id={'Tooltip-'}>
        Top
        </Button>
        <Tooltip target={'Tooltip-'}>
        Tooltip Content!
        </Tooltip>
        </>
     , { attachTo: div });
    expect(wrapper.find(StrapTooltip)).toHaveLength(1);
  })

})
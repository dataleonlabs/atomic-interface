import * as React from 'react'
import * as enzyme from 'enzyme'
import Panel from './index'
import { Card as strapPanel , CardHeader  } from 'reactstrap';

describe('<Panel />', () => {
  it('U-TEST-1 - Pane', () => {
    const wrapper = enzyme.mount(
      <Panel>
        this is demo 
      </Panel>
    )
    expect(wrapper.find(strapPanel)).toHaveLength(1);
    expect(wrapper.find(CardHeader)).toHaveLength(0);
    
  })

  it('U-TEST-2 - Title', () => {
    const wrapper = enzyme.mount(
      <Panel title="modal" >
        this is demo 
      </Panel>
    )
    expect(wrapper.find(strapPanel)).toHaveLength(1);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
    
  })
})
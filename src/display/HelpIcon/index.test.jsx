import * as React from 'react'
import * as enzyme from 'enzyme'
import HelpIcon from './index'

describe('<Popover/>', () => {

  it('U-TEST-1 - Helpicon render', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = enzyme.mount(
        <HelpIcon
          header="help"
        >
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      </HelpIcon>
      , { attachTo: div });

      expect(wrapper.find(HelpIcon)).toHaveLength(1);
      expect(wrapper.props().header).toEqual('help')
  })
})
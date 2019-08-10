import * as React from 'react'
import * as enzyme from 'enzyme'
// import sinon from 'sinon';
import DropDown from './index'
import DropdownItem from './DropdownItem';
import { Dropdown as strapDropDown, DropdownItem as strapDropDownItem } from 'reactstrap';

describe('<DropDown />', () => {
  it('U-TEST-1 - dropdown render', () => {
    // sinon.spy(DropDown., 'toggle');

    const wrapper = enzyme.mount(
      <DropDown title="DropDown" >
        <DropdownItem> Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropDown>
    )
    wrapper.find(strapDropDown).simulate('toggle',{});
    expect(wrapper.find(strapDropDown)).toHaveLength(1);
    expect(wrapper.find(strapDropDownItem)).toHaveLength(6);
    
  })

  it('U-TEST-2 - dropdown render with divider', () => {
    const wrapper = enzyme.mount(
      <DropDown title="DropDown" >
        <DropdownItem> header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem divider={true} />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropDown>
    )

    // wrapper.find('toggle')
    expect(wrapper.find(strapDropDown)).toHaveLength(1);
    expect(wrapper.find(strapDropDownItem)).toHaveLength(6);
    expect(wrapper.contains(<DropdownItem divider={true} />)).toEqual(true);
  })

})
import * as React from 'react'
import * as enzyme from 'enzyme'
import Text from './index'

describe('<Text/>', () => {

  it('U-TEST-1 - Text', () => {
    const wrapper = enzyme.mount(
      <Text>
        this is render text
      </Text>
    );
    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.find(Text).text()).toEqual('this is render text');
  })

  it('U-TEST-2 - Text Help', () => {
    const wrapper = enzyme.mount(
      <>
        <Text textStyle="help" >
          this is render text
        </Text>
        <Text textStyle="help" capitalizeFirstLetter>
          this is render text
      </Text>
      </>
    );
    expect(wrapper.find(Text)).toHaveLength(2);
    expect(wrapper.find(Text).get(0).props.textStyle).toEqual('help');
  })

  it('U-TEST-3 - Date format', () => {
    const wrapper = enzyme.mount(
      <Text textStyle="help" type="date" format="DD MMM">
        2017-1-27
      </Text>
    );
    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.props().textStyle).toEqual('help');
    expect(wrapper.props().type).toEqual('date');
    expect(wrapper.props().format).toEqual('DD MMM');
  })

  it('U-TEST-4 - Money format', () => {
    const wrapper = enzyme.mount(
      <Text textStyle="help" type="currency" format="EUR">
        1000
      </Text>
    );
    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.props().type).toEqual('currency');
    expect(wrapper.props().format).toEqual('EUR');
    expect(wrapper.find(Text).text()).toContain('€');
  })

  it('U-TEST-5 - Duration Format', () => {
    const wrapper = enzyme.mount(
      <Text textStyle="help" type="ago" >
        2017-1-27
      </Text>
    );
    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.props().type).toEqual('ago');
    expect(wrapper.text()).toContain('il y a ');
    expect(wrapper.text()).toContain('ans');
  })

  it('U-TEST-5 - With Valid', () => {
    const wrapper = enzyme.mount(
      <>
        <Text textStyle="help" type="ago" >
          <span>
            2017-1-27
          </span>
        </Text>
        <Text textStyle="help" trucanteType="middle" useWordBoundary={4} >
          this is demo of middle trucante type
        </Text>
        <Text textStyle="help" trucanteType="right" >
          this is demo of right trucante type
        </Text>
      </>
    );
    expect(wrapper.find(Text)).toHaveLength(3);
    expect(wrapper.find(Text).get(0).props.type).toEqual('ago');
  })

  it('U-TEST-6 - InValid Data', () => {
    const wrapper = enzyme.mount(
      <>
        <Text textStyle="help" type="currency" format="EURQ">
          1000
        </Text>
        <Text textStyle="help" type="currency" >
          1000
        </Text>
        <Text textStyle="help" type="currency" >
          ASD
        </Text>
        <Text textStyle="help" type="date" >
          asasasa
        </Text>
        <Text textStyle="help" type="ago" >
          asas
      </Text>
      </>
    );
    expect(wrapper.find(Text)).toHaveLength(5);
    expect(wrapper.find(Text).get(0).props.type).toEqual('currency');
  })

  it('U-TEST-7 - Money Format', () => {
    const wrapper = enzyme.mount(
      <Text textStyle="help" type="currency" format="EUR">
        1000
      </Text>
    );
    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.props().type).toEqual('currency');
    expect(wrapper.props().format).toEqual('EUR');
    expect(wrapper.find(Text).text()).toContain('€');
  })

  it('U-TEST-8 - Duration Format', () => {
    const wrapper = enzyme.mount(
      <Text type="duration" format="ss [secs]">
        15
      </Text>
    );
    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.props().type).toEqual('duration');
    expect(wrapper.props().format).toEqual('ss [secs]');
    expect(wrapper.find(Text).text()).toContain('15 secs');
  })

})
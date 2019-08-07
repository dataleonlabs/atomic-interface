import * as React from 'react'
import * as enzyme from 'enzyme'
import Tabs from './index'
import TabItem from './TabItem';
import { TabContent, TabPane } from 'reactstrap';


describe('<Tabs/>', () => {

  it('U-TEST-1 - Tabs render', () => {
    const wrapper = enzyme.mount(
      <Tabs >
        <TabItem title={"One"}>Foo Action</TabItem>
        <TabItem title={"Two"}>Bar Action</TabItem>
        <TabItem title={"Three"}>Quo Action</TabItem>
      </Tabs>
    );

    expect(wrapper.find(TabContent)).toHaveLength(1);
    expect(wrapper.find(TabItem)).toHaveLength(0);
    expect(wrapper.find(TabPane)).toHaveLength(3);
  })

  it('U-TEST-2 - Tabs rendering with disable tab', () => {
    const wrapper = enzyme.mount(
      <Tabs >
        <TabItem title={"One"}>Foo Action</TabItem>
        <TabItem title={"Two"} disabled>Bar Action</TabItem>
        <TabItem title={"Three"}>Quo Action</TabItem>
      </Tabs>
    );

    expect(wrapper.find(TabContent)).toHaveLength(1);
    expect(wrapper.find(TabItem)).toHaveLength(0);
    expect(wrapper.find(TabPane)).toHaveLength(2);
  })

})
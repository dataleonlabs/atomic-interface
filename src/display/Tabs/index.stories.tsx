import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Tabs from './index';
import TabItem from './TabItem';

storiesOf('Display|Tabs', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Tabs</h4>
        <Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title={"One"}>Foo Action</TabItem>
          <TabItem title={"Two"}>Bar Action</TabItem>
          <TabItem title={"Three"}>Quo Action</TabItem>
        </Tabs>
      </Col>
    </React.Fragment>
  ))
  .add('With disable tab', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Tabs</h4>
        <Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title={"One"} >Foo Action</TabItem>
          <TabItem title={"Two"} disabled >Bar Action</TabItem>
          <TabItem title={"Three"}>Quo Action</TabItem>
        </Tabs>
      </Col>
    </React.Fragment>
  ))


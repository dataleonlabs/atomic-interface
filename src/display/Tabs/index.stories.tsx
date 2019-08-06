import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Tabs from './index';
import TabItem from './TabItem';


class CustomTab extends React.Component {

  state = {
    activeTab: 0
  }

  onChange = (value: number) => {
    this.setState({ activeTab: value })
  }

  render() {
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Tabs</h4>
          <Tabs activeTab={this.state.activeTab} onChange={this.onChange}>
            <TabItem title={"One"}>Foo Action</TabItem>
            <TabItem title={"Two"}>Bar Action</TabItem>
            <TabItem title={"Three"}>Quo Action</TabItem>
          </Tabs>
        </Col>
      </React.Fragment>
    )
  }
}

class CustomTabWithDisable extends React.Component {

  state = {
    activeTab: 0
  }

  onChange = (value: number) => {
    this.setState({ activeTab: value })
  }

  render() {
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Tabs</h4>
          <Tabs activeTab={this.state.activeTab} onChange={this.onChange}>
            <TabItem title={"One"}>Foo Action</TabItem>
            <TabItem title={"Two"} disabled >Bar Action</TabItem>
            <TabItem title={"Three"}>Quo Action</TabItem>
          </Tabs>
        </Col>
      </React.Fragment>
    )
  }
}

storiesOf('Display|Tabs', module)
  .add('Example', () => (<CustomTab />))
  .add('With disable tab', () => (<CustomTabWithDisable />))


import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import DropDown from './index';
import DropDownItem from './DropdownItem';


class RenderDropDown extends React.Component<{ divider?: Boolean }> {


  render() {
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>DropDown</h4>
          <DropDown title="DropDown" caret >
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>
            {this.props.divider && <DropDownItem divider />}
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
        </Col>
      </React.Fragment>
    )
  }

}

storiesOf('Display|DropDown', module)
  .add('Example', () => (
    <RenderDropDown />
  ))
  .add('With separator', () => (
    <RenderDropDown divider />
  ))

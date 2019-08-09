import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Text', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Text</h4>
        <Text tooltip="this is demo of simple text" >
          this is demo of simple text
        </Text>
      </Col>
    </React.Fragment>
  ))
  .add('With help text', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Text</h4>

        <Text textStyle="help" capitalizeFirstLetter>
          this is demo of help textstyle
       </Text>
      </Col>
    </React.Fragment>
  ))
  .add('With help block', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Text</h4>

        <Text textStyle="help" capitalizeFirstLetter>
          this is demo of help textstyle with capitalizeFirstLetter
       </Text>
         Date:
        <Text type="date" format="DD MMM">
          12-03-2014
       </Text>
        <br /> Time ago:
        <Text type="ago">
          12-03-2018
       </Text>
        <br /> Currency:
        <Text type="currency" format="EUR">
          12032018
       </Text>
      </Col>
    </React.Fragment>
  ))


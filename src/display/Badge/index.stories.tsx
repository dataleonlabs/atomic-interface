import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './index';
import { Col } from 'reactstrap';

storiesOf('Display|Badge', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Pills</h4>
        <Badge color="primary">
          Primary
        </Badge>
      </Col>
    </React.Fragment>
  ))
  .add('With Pills', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Pills</h4>
        <Badge color="success" pill>
          Info
        </Badge>
      </Col>
    </React.Fragment>
  ))

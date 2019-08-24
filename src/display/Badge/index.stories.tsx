import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Badge', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Badge</h4>
        <h5><Badge color="primary">Primary</Badge></h5>
      </Col>
    </React.Fragment>
  ))
  .add('With Pills', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Pills</h4>
        <h5><Badge color="success" pill>
          Info
        </Badge></h5>
      </Col>
    </React.Fragment>
  ))

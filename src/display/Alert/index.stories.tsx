import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './index';
import { Col } from 'reactstrap';

storiesOf('Display|Alert', module)
  .add('Example', () => (
    <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Alert</h4>
          <Alert icon={true} color="primary">
            Demo Of Alert Box with Icon
        </Alert>
        </Col>
    </React.Fragment>
  ))
  .add('Without Icon', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Alert</h4>
        <Alert icon={false} color="primary">
          Demo Of Alert Box without icon
        </Alert>
      </Col>
    </React.Fragment>
  ))
  .add('Info Color', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Alert</h4>
        <Alert icon={false} color="info">
          Demo Of Alert Box without icon
        </Alert>
      </Col>
    </React.Fragment>
  ))
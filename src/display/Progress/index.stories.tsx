import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Progress', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Progress</h4>
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
      </Col>
    </React.Fragment>
  ))
  .add('With progress to 60%', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Progress</h4>
        <Progress value={60} />
      </Col>
    </React.Fragment>
  ))

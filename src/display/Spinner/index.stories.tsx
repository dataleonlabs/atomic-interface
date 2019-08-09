import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Spinner', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Spinners</h4>
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="info" />
        <Spinner color="light" />
        <Spinner color="dark" />
      </Col>
    </React.Fragment>
  )).add('With spinner grow', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Spinners grow</h4>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </Col>
    </React.Fragment>
  ))
 

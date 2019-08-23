import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './index';
import { Col, Button } from 'reactstrap';
import Form from './../../index';

storiesOf('Forms|DatePicker', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>DatePicker</h4>
        <Form>
          {(_) => (
            <DatePicker dateFormat="yyyy/MM/dd" name="datepicker" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example with Disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>DatePicker</h4>
        <Form>
          {(_) => (
            <DatePicker disabled={true} dateFormat="yyyy/MM/dd" name="datepicker" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
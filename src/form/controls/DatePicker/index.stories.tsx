import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './index';
import { Col, Button } from 'reactstrap';
import Form from './../../index';

storiesOf('Forms|DatePicker', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Simple DatePicker</h4>
        <p>A simple and reusable datepicker component of Atomic Interface.</p>
        <Form>
          {(_) => (
            <DatePicker dateFormat="yyyy/MM/dd" name="datepicker" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Disabled DatePicker</h4>
        <p>Disable your datepicker using props <b>Disabled</b>.</p>
        <Form>
          {(_) => (
            <DatePicker disabled={true} dateFormat="yyyy/MM/dd" name="datepicker" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example DateRange', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>DatePicker with DateRange</h4>
        <p>Set Date Range using props <b>Options</b> by setting <b>startDate</b>, <b>endDate</b>, <b>selected</b>.</p>
        <Form>
          {(_) => (
            <DatePicker
              options={{
                onChange: date => new Date("2019/09/08"),
                selected: new Date("2019/09/02"),
                startDate: new Date("2019/09/02"),
                endDate: new Date("2019/09/5")
              }}
              name="datepicker"
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
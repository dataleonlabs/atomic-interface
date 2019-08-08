import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Switch', module)
  .add('Test label in right', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Switch</h4>
        <Form>
          {(props) => (
            <Switch name='switch' label="Turn on this custom switch"/>
          )}
        </Form>
        </Col>
    </React.Fragment>
  )).add('Test disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Switch</h4>
        <Form>
          {(props) => (
            <Switch name='switch' label="Can't click this label to turn on!" disabled={true}      
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
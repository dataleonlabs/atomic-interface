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
            <Switch name='switch'
            renderlabel="Switch"
          />
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
            <Switch
              name='switch'
              renderlabel="Switch"
              disabled={true}      
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Test tooltip beside label', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Switch</h4>
        <Form>
          {(props) => (
            <Switch
              name='switch'
              tooltip='test'
              renderlabel="Switch"
            
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
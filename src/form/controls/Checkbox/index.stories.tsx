import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Checkbox', module)
  .add('Test label in right', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Checkbox</h4>
        <Form>
          {(props) => (
            <Checkbox name='checkbox'
            renderlabel="Checkbox"
          />
          )}
        </Form>
        </Col>
    </React.Fragment>
  )).add('Test disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Checkbox</h4>
        <Form>
          {(props) => (
            <Checkbox
              name='checkbox'
              renderlabel="Checkbox"
              disabled={true}      
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Test tooltip beside label', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Checkbox</h4>
        <Form>
          {(props) => (
            <Checkbox
              name='checkbox'
              tooltip='test'
              renderlabel="Checkbox"     
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Radio', module)
  .add('Test label in right', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Radio</h4>
        <Form>
          {(props) => (
            <Radio name='radio'
            renderlabel="Radio Button"
          />
          )}
        </Form>
        </Col>
    </React.Fragment>
  )).add('Test disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Radio</h4>
        <Form>
          {(props) => (
            <Radio
              name='radio'
              renderlabel="Radio Button"
              disabled={true}      
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Test tooltip beside label', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Radio</h4>
        <Form>
          {(props) => (
            <Radio
              name='radio'
              tooltip='test'
              renderlabel="Radio Button"
            
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
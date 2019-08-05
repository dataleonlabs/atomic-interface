import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Input', module)
  .add('Example', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Input</h4>
        <Form>
          {(props) => (
            <Input name={'email'} />
          )}
        </Form>
        </Col>
    </React.Fragment>
  )).add('With left and right', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Input</h4>
        <Form>
          {(props) => (
            <Input
              name={'email'}
              leftAddon={'test'}
              rightAddon={'EUR'}
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
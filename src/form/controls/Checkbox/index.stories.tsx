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
            <>
              <Checkbox name='gender' label={'Check this custom checkbox'}/>
              <Checkbox name='gender2' label={'Or this one'} />
            </>
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
            <>
              <Checkbox name='gender' label={'Check this custom checkbox'} />
              <Checkbox disabled name='gender2' label={'Or this one'} />
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))
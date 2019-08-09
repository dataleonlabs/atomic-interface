import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './index';
import { Col } from 'reactstrap';
import Form from './../../index'
storiesOf('Forms|Textarea', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Textarea</h4>
        <Form>
          {(_) => (
            <Textarea placeholder={'Example content with Textarea'} name='text' />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('With maxRows', () => (
    <React.Fragment>
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Textarea</h4>
        <Form>
          {(_) => (
            <Textarea placeholder={'Example maxRows 10'} name='text' maxRows={10} />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
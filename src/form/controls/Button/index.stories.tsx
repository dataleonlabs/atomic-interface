import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonComponent from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Button', module)
  .add('Test Button disabled', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Button</h4>
        <Form>
          {(props) => (
            <ButtonComponent
            onPress={()=>alert("I am pressed")}
            name='button'
            renderspinner={false}
            disabled={true}
            color="primary"
            title={'test'}

          />
          )}
        </Form>
        </Col>
    </React.Fragment>
  )).add('Test Button with spinner', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Button</h4>
        <Form>
          {(props) => (
            <ButtonComponent
            onPress={()=>alert("I am pressed")}
            name='button'
            renderspinner={true}
            disabled={false}
            color="primary"
            title={'test'}
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
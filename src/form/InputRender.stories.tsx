import React from 'react';
import { storiesOf } from '@storybook/react';
import InputRender from './InputRender';
import { Col } from 'reactstrap';

storiesOf('Forms|Input', module)
  .add('Example', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Input</h4>
          <InputRender
            field={{
              placeholder: "Example",
              right: 'EUR'
            }}
          />
        </Col>
    </React.Fragment>
  )).add('With left and right', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Input</h4>
        <InputRender
          field={{
            placeholder: "example.com",
            left: 'https://',
            right: '.com'
          }}
        />
      </Col>
    </React.Fragment>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './index';
import { Col } from 'reactstrap';

storiesOf('Forms|Textarea', module)
  .add('Example', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Textarea</h4>
        <Textarea
            field={{
              placeholder: "Example",
              maxRows: 5
            }}
          />
        </Col>
    </React.Fragment>
  )).add('With maxRows', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Textarea</h4>
        <Textarea
          field={{
            placeholder: "Example maxRows 10",
            maxRows: 10
          }}
        />
      </Col>
    </React.Fragment>
  ));
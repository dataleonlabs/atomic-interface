import React from 'react';
import { storiesOf } from '@storybook/react';
import Abbreviation from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Abbreviation', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Abbreviation</h4>
        <Abbreviation>Demo Of Alert</Abbreviation>
        <Abbreviation>Demo Box</Abbreviation>
        <Abbreviation>Demo Alert</Abbreviation>
      </Col>
    </React.Fragment>
  ))
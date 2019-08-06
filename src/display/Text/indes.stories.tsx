import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';
import { Col } from 'reactstrap';

storiesOf('Display|Text', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Text</h4>
       <Text >
         this is demo of text
       </Text>
      </Col>
    </React.Fragment>
  ))
 

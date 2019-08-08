import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './index';
import { Col, Button } from 'reactstrap';



storiesOf('UI Elements|Tooltip', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Tooltip</h4>
        <Button color="secondary" id={'Tooltip-'}>
          Top
        </Button>
        <Tooltip target={'Tooltip-'}>
          Tooltip Content!
        </Tooltip>
      </Col>
    </React.Fragment>
  ))


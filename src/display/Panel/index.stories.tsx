import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col, Button } from 'reactstrap';
import Panel from './index';


storiesOf('UI Elements|Panel', module)
  .add('Example', () => (
    <Panel title="Header title">
      Special Title Treatment
      With supporting text below as a natural lead-in to additional content.
    </Panel>
  ))

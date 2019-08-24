import React from 'react';
import { PanelProps as Props } from './props';
import { CardHeader, CardBody } from 'reactstrap';

import { StyledPanel } from './style'

/**
 * Modal render element
 */

const Panel = (props: Props) => (
  <StyledPanel>
    {props.title && <CardHeader>{props.title}</CardHeader>}
    <CardBody>
      {props.children}
    </CardBody>
  </StyledPanel>
)

export default Panel;

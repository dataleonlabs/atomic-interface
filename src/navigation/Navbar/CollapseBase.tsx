import React from 'react';
import { Collapse } from 'reactstrap';
import { CollapseProps as Props } from './props';
import { NavbarTogglerProps as ToogleProps } from './props';

/**
 * TabItem render element
 */

const CollapseBase /* istanbul ignore next  */ = (props: Props, toggleProps: ToogleProps) => {
  return (
    <Collapse isOpen={props.isOpen} navbar>
      {props.children}
    </Collapse>
  )
}

export default CollapseBase;

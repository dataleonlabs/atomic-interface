import React from 'react';
import { TabPane } from 'reactstrap';
import { TabItem as Props } from './props';

/**
 * TabItem render element
 */

const TabItem /* istanbul ignore next  */ = (props: Props) => {
  return (
    <TabPane  {...props}>
      {props.children}
    </TabPane>
  )
}

export default TabItem;

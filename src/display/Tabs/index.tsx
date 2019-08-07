import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, Nav, NavItem, TabPane, NavLink } from 'reactstrap';
import { TabsProps as Props } from './props';
import { element } from 'prop-types';


/**
 * Tabs render element 
 */

const Tabs = (props: Props) => {
  
  const [active, setActive] = useState(Number(props.activeTab || 1))

  /* istanbul ignore next  */
  function onClick(index: number, _element: any, child: JSX.Element) {
    setActive(index)
    if ((!child.props.disabled && props.onChange) && (typeof props.onChange === 'function')) {
      props.onChange(index, _element);
    }
  }

  return (
    <>
      <Nav tabs>
        {
          React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
              if (child.props && child.props.title) {
                return (
                  <NavItem>
                    <NavLink
                      onClick={/* istanbul ignore next  */ (_element) /* istanbul ignore next  */ => { onClick(index, element, child) }}
                      className={classnames({ active: active === index })}
                    >
                      {child.props.title}
                    </NavLink>
                  </NavItem>
                )
              }
            }
            /* istanbul ignore next  */
            return null
          })
        }
      </Nav>
      <TabContent activeTab={props.activeTab || 0}>
        {
          React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
              if (child.props && child.props.title && (child.props.disabled !== true)) {
                return (
                  <TabPane tabId={index}>
                    {child.props.children}
                  </TabPane>
                )
              }
            }
            /* istanbul ignore next  */
            return null
          })
        }
      </TabContent>
    </>
  )
}

export default Tabs;

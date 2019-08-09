import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, NavLink } from 'reactstrap';
import { TabsProps as Props } from './props';
import { StyledNavItem, StyledNav } from './style';
import { element } from 'prop-types';


/**
 * Tabs render element 
 */

const Tabs = (props: Props) => {
  
  const [active, setActive] = useState(Number(props.activeTab || 0))

  /* istanbul ignore next  */
  function onClick(index: number, _element: any, child: JSX.Element) {
    if ((!child.props.disabled && props.onChange) && (typeof props.onChange === 'function')) {
      setActive(index)
      props.onChange(index, _element);
    }
  }

  return (
    <>
      <StyledNav tabs>
        {
          React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
              const childProps = child.props as any;
              if (childProps && childProps.title) {
                return (
                  <StyledNavItem>
                    <NavLink
                      onClick={/* istanbul ignore next  */ (_element) /* istanbul ignore next  */ => { onClick(index, element, child) }}
                      className={classnames({ active: active === index })}
                    >
                      {childProps.title}
                    </NavLink>
                  </StyledNavItem>
                )
              }
            }
            /* istanbul ignore next  */
            return null
          })
        }
      </StyledNav>
      <TabContent activeTab={active}>
        {
          React.Children.map(props.children, (child, index: number) => {
            if (React.isValidElement(child)) {
              const childProps = child.props as any;
              if (child.props && childProps.title && (childProps.disabled !== true)) {
                return (
                  <TabPane tabId={index}>
                    {childProps.children}
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
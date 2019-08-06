import React from 'react';
import classnames from 'classnames';
import { TabContent, Nav, NavItem, TabPane, Row, Col, NavLink } from 'reactstrap';
import { TabsProps as Props } from './props';


/**
 * Tabs render element 
 */

const Tabs = (props: Props) => {
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
                      onClick={(_element) => { (!child.props.disabled && props.onChange) && props.onChange(index, _element) }}
                      className={classnames({ active: props.activeTab === index })}
                    >
                      {child.props.title}

                    </NavLink>
                  </NavItem>
                )
              }
            }
            return null
          })

        }


      </Nav>
      <TabContent activeTab={props.activeTab || 0}>
        {
          React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
              if (child.props && child.props.title) {
                return (
                  <TabPane tabId={index}>
                    <Row>
                      <Col sm="12">
                        <h4>{child.props.children}</h4>
                      </Col>
                    </Row>
                  </TabPane>

                )
              }
            }
            return null
          })

        }
        {props.children}
      </TabContent>
    </>
  )
}

export default Tabs;

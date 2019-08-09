import React from 'react';
import { storiesOf } from '@storybook/react';
import {Sidebar, SidebarNav,SidebarNavItem,SidebarNavLink} from './index';
import { Col } from 'reactstrap';
storiesOf('Navigation|Sidebar', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Sidebar</h4>
        <Sidebar link="#" name="Nav1"> 
          
      </Sidebar>
      </Col>
    </React.Fragment>
 ));
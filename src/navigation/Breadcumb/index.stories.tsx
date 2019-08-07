import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col} from 'reactstrap';
import { Breadcrumb ,BreadcrumbItem } from 'reactstrap';

storiesOf('Navigation | Breadcrumb', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={5} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb</h4>
            
        <Breadcrumb>
          
        <BreadcrumbItem> <a href="#">Story</a></BreadcrumbItem>
        <BreadcrumbItem> <a href="#">Navigation</a></BreadcrumbItem>
        <BreadcrumbItem  active>Breadcrumb</BreadcrumbItem>
  
        </Breadcrumb>
      </Col>
    </React.Fragment>
 )) .add('With Disable', () => (
    <React.Fragment>
      <Col sm={5} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb with disable</h4>
        <Breadcrumb>
           
        <BreadcrumbItem>Story</BreadcrumbItem>
        <BreadcrumbItem>Navigation</BreadcrumbItem>
        <BreadcrumbItem  active>Breadcrumb</BreadcrumbItem>

        </Breadcrumb>
      </Col>
    </React.Fragment>
  ));
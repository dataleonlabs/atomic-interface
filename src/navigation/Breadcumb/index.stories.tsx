import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './index'
import { Col, BreadcrumbItem } from 'reactstrap';

storiesOf('Navigation|Breadcrumb', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb</h4>
        <div>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>

          </Breadcrumb>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb</h4>
        <div>
        <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
            <BreadcrumbItem active>Disabled</BreadcrumbItem>
        </Breadcrumb>
        </div>
      </Col>
    </React.Fragment>
  ))
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import BreadcrumbItem from './BreadcrumbItem';
import Breadcrumb from './index';

storiesOf('Navigation|Breadcrumb', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb</h4>
        <Breadcrumb>
          <BreadcrumbItem>Story</BreadcrumbItem>
          <BreadcrumbItem>Navigation</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </React.Fragment>
  ))
  .add('With loader', () => (
    <React.Fragment>
      <Col sm={12} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb</h4>
        <div>
          <Breadcrumb loading={true}>
            <BreadcrumbItem> <a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem> <a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Col>
    </React.Fragment>
  ))
  .add('With link', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb</h4>
        <div>
        <Breadcrumb>
          <BreadcrumbItem> <a href="#">Story</a></BreadcrumbItem>
          <BreadcrumbItem> <a href="#">Navigation</a></BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        </div>
      </Col>
    </React.Fragment>
  ))
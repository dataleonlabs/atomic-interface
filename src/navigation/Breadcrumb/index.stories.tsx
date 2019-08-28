import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import BreadcrumbItem from './BreadcrumbItem';
import Breadcrumb from './index';

storiesOf('Navigation|Breadcrumb', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Breadcrumb</h2>
        <br/>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Read the Official Bootstrap Documentation for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Basic Styling</h4>
        <br/>
        <p>The example below is the basic styling of the breadcrumb from Bootstrap.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Breadcrumb>
          <BreadcrumbItem>Story</BreadcrumbItem>
          <BreadcrumbItem>Navigation</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Breadcrumb>
  <BreadcrumbItem>Story</BreadcrumbItem>
  <BreadcrumbItem>Navigation</BreadcrumbItem>
  <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
</Breadcrumb>
          `}
          </pre>
          <hr />
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
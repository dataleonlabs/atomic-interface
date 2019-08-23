import React from 'react';
import { storiesOf } from '@storybook/react';
import RichText from './index';
import { Col, Button } from 'reactstrap';
import Form from './../../index';

storiesOf('Forms|RichText', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText name="richText" label="Enter Your Message" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example with ToolTip', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText toolTip="This is sample ToolTip for label" name="richText" label="Label with ToolTip" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example Read Only', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText readOnly={true} name="richText" label="This is Read Only RichText" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example Disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText disabled={true} name="richText" label="This is Disabled RichText" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example Toolbar Disabled only', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText toolbarDisable={true} name="richText" label="Enter Your Message | Toolbar is Disabled" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example Theme Bubble', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText theme="bubble" name="richText" label="Enter Your Message | Select All And Use Bubble Toolbar" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example with Error', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText</h4>
        <Form>
          {(_) => (
            <RichText error={true} name="richText" label="RichText with Error" required={true} />            
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeEditor from './index';
import { Col, Button } from 'reactstrap';
import Form from './../../index';

storiesOf('Forms|CodeEditor', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor name="editor" label="Write Your Code" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example JavaScript', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor name="editor" mode="javascript" label="JavaScript Code Editor" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example YAML', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor name="editor" mode="yaml" label="YAML Code Editor" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example JSON', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor name="editor" mode="json" label="JSON Your Code" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example HTML', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor name="editor" mode="html" label="HTML Code Editor" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));
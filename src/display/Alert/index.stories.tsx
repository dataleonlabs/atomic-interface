import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Alert', module)
  .add('Default Functionality', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Alert - Default Functionality</h4>
        <p>Provide contextual feedback messages for typical user actions. Read the Official Bootstrap Documentation for a full list of instructions and other options.</p>
        <br />
        <h6><strong>Example</strong></h6>
        <hr/>
        <Alert icon={true} color="primary"> Demo Of Alert Box with Icon</Alert>
        <Alert icon={true} color="secondary"> Demo Of Alert Box with Icon</Alert>
        <Alert icon={true} color="success"> Demo Of Alert Box with Icon</Alert>
        <Alert icon={true} color="info"> Demo Of Alert Box with Icon</Alert>
        <Alert icon={true} color="warning"> Demo Of Alert Box with Icon</Alert>
        <Alert icon={true} color="danger"> Demo Of Alert Box with Icon</Alert>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Alert icon={true} color="danger"> Demo Of Alert Box with Icon</Alert>
          `}
        </pre>
        <hr />
      </Col>
    </React.Fragment>
  ))
  .add('Without Icon', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Alert - Without Icon</h4>
        <p>Provide contextual feedback messages for typical user actions. Read the Official Bootstrap Documentation for a full list of instructions and other options.</p>
        <br />
        <h6><strong>Example</strong></h6>
        <hr />
        <Alert icon={false} color="primary">
          Demo Of Alert Box without icon
        </Alert>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Alert icon={false} color="primary">
    Demo Of Alert Box without icon
</Alert>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Additional Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Alert - Additional Content</h4>
        <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
        <br />
        <h6><strong>Example</strong></h6>
        <hr />
        <Alert icon={false} color="success">
          <>
            <p>Well done!</p>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
            <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </>
        </Alert>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Alert icon={false} color="success">
  <>
    <p>Well done!</p>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr/>
    <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </>
</Alert>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
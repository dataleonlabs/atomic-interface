import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Alert', module)
  .add('Default Functionality', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Alert</h2>
        <br/>
        <p>Provide contextual feedback messages for typical user actions. Read the <a href="https://getbootstrap.com/docs/4.2/components/alerts/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Default Functionality</h4>
        <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the six required contextual classes.</p>
        <br/>
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
<Alert icon={true} color="primary"> Demo Of Alert Box with Icon</Alert>
<Alert icon={true} color="secondary"> Demo Of Alert Box with Icon</Alert>
<Alert icon={true} color="success"> Demo Of Alert Box with Icon</Alert>
<Alert icon={true} color="info"> Demo Of Alert Box with Icon</Alert>
<Alert icon={true} color="warning"> Demo Of Alert Box with Icon</Alert>
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
        <br/>
        <p>Use the <code>{`icon={false}`}</code> property to quickly remove the icon inside box.</p>
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
  .add('Dismissing', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Alert - Dismissing</h4>
        <br/>
        <p>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Add an alert element with <code>{`color="dismiss"`}</code> property.</p>
        <br />
        <h6><strong>Example</strong></h6>
        <hr />
        <Alert icon={false} color="dismiss">
          <>
            <p><strong>Holy guacamole!</strong> You should check in on some of those fields below. <close>X</close></p>
          </>
        </Alert>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Alert icon={false} color="dismiss">
  <>
  <p><strong>Holy guacamole!</strong> You should check in on some of those fields below.</p>
  </>
</Alert>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './index';
import { Col } from 'reactstrap';
import Form from './../../index'
storiesOf('Forms|Textarea', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Textarea</h2>
        <br/>
        <hr/>
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>A basic form control of textarea.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <Textarea placeholder={'Example content with Textarea'} name='text' />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Form>
{(_) => (
  <Textarea placeholder={'Example content with Textarea'} name='text' />
)}
</Form>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Maximum Rows', () => (
    <React.Fragment>
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Textarea - Maximum Rows</h4>
        <br/>
        <p>Add <code>maxRows={`{10}`}</code> property to ristrict the textarea content.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <Textarea placeholder={'Example maxRows 10'} name='text' maxRows={10} />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Form>
{(_) => (
  <Textarea placeholder={'Example content with Textarea'} name='text' />
)}
</Form>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Radio', module)
  .add('Basic Example', () => (
    <React.Fragment>
        <Col sm={8} style={{marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements - Radios</h2>
          <br/>
          <hr/>
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br/>
          <h4>Basic Example</h4>
          <br/>
          <p>For even more customization and cross browser consistency, use our completely custom radio element to replace the browser defaults.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Form>
            {(_) => (
              <>
                <Radio name='radio' label="Radio Button"/>
                <Radio name='radio1' checked label="Radio Button"/>
              </>
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
    <>
      <Radio name='radio' label="Radio Button"/>
      <Radio name='radio1' checked label="Radio Button"/>
    </>
  )}
</Form>
            `}
          </pre>
        </Col>
    </React.Fragment>
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Disabled</h4>
        <br/>
        <p>Add <code>disabled={`{true}`}</code> property.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <Radio
              name='radio'
              label="Radio Button"
              disabled={true}      
            />
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
    <Radio
      name='radio'
      label="Radio Button"
      disabled={true}      
    />
  )}
</Form>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
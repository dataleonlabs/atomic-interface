import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Switch', module)
  .add('Basic Example', () => (
    <React.Fragment>
        <Col sm={8} style={{marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements - Swithces</h2>
          <br/>
          <hr/>
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br/>
          <h4>Basic Example</h4>
          <br/>
          <p>A switch has the markup of a whole new element Switch.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Form>
            {(_) => (
              <>
                <Switch name='switch' label="Turn on this custom switch"/>
                <Switch name='switch1' checked label="Turn on this custom switch"/>
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
      <Switch name='switch' label="Turn on this custom switch"/>
      <Switch name='switch1' checked label="Turn on this custom switch"/>
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
        <h4>Switch - Disabled</h4>
        <br/>
        <p>Switches also support the disabled attribute just add <code>disabled={`{true}`}</code> property.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <>
              <Switch name='switch' label="Can't click this label to turn on!" disabled={true} />
              <Switch name='switch' label="Can't click this label to turn on!" disabled={true} checked/>
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
      <Switch name='switch' label="Can't click this label to turn on!" disabled={true} />
      <Switch name='switch' label="Can't click this label to turn on!" disabled={true} checked/>
    </>
  )}
</Form>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ));
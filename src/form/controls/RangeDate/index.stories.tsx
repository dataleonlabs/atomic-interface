import React from 'react';
import { storiesOf } from '@storybook/react';
import RangeDate from './index';
import { Col } from 'reactstrap';
import Form from '../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

storiesOf('Forms|RangeDate', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - RangeDate</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>A basic form control RangeDate.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>        
          {(values) => (
            <>
              <RangeDate                
                name={'date_range'}
                label={'Enter Number Range'}
                minPlaceholder='Start Range'
                maxPlaceholder='End Range'
              />
              <br />
              <code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<RangeDate          
  name={'date_range'}
  label={'Enter Number Range'}
  minPlaceholder='Start Range'
  maxPlaceholder='End Range'
/>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Basic Example with Initial Values', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - RangeDate</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>A basic form control RangeDate.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form
          initialValues={{ date_range: { min: new Date("10/09/2019"), max: new Date("10/12/2019") } }}
        >
          {(values) => (
            <>
              <RangeDate                
                name={'date_range'}
                label={'Enter Number Range'}
                minPlaceholder='Start Range'
                maxPlaceholder='End Range'
              />
              <br />
              <code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Form 
  initialValues={{ date_range: { min: new Date("12/10/2019"), max: new Date("15/10/2019") } }}
  {(values) => (
    <>
      <RangeNumber        
        name={'date_range'}
        label={'Enter Number Range'}
        minPlaceholder='Start Range'
        maxPlaceholder='End Range'
      />
      <code>values: {JSON.stringify(values.values)}</code><br />
    </>
  )}
</Form>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Basic Example - ReadOnly', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - RangeDate</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>A basic form control RangeDate.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(values) => (
            <>
              <RangeDate                
                name={'date_range'}
                label={'Enter Date Range'}
                minPlaceholder='Start Date'
                maxPlaceholder='End Date'
                readOnly={true}
              />
              <br />
              <code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<RangeDate  
  name={'date_range'}
  label={'Enter Date Range'}
  minPlaceholder='Start Date'
  maxPlaceholder='End Date'
  readOnly={true}
/>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));
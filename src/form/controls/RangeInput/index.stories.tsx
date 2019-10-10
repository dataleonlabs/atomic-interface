import React from 'react';
import { storiesOf } from '@storybook/react';
import RangeInput from './index';
import { Col } from 'reactstrap';
import Form from '../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

storiesOf('Forms|RangeInput', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Input Box</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>A basic form control with disabled and readonly mode.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <RangeInput type="number" min={0} max={125} name={'age'} label={'Enter Your Age'} placeholder={'Enter Number Only'} />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<RangeInput type="number" min="0" max="125" name={'age'} label={'Enter Your Age'} placeholder={'Enter Number Only'} />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));
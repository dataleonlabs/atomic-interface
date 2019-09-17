import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Switch from '../Switch';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Radio', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Radios</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>For even more customization and cross browser consistency, use our completely custom radio element to replace the browser defaults.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <>
              <Radio name='radio' label="Radio Button" />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Radio name='radio' label='Radio Button'/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Radio - Disabled</h4>
        <br />
        <p>Add <code>disabled={`{true}`}</code> property.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <Radio
              name='radio'
              label="Radio Button"
              disabled={true}
            />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Radio
  name='radio'
  label='Radio Button'
  disabled={true}      
/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Conditional Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Radios</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Conditional Example</h4>
        <br />
        <p>For even more customization and cross browser consistency, use our completely custom radio element to replace the browser defaults.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(values) => (
            <>
              <Switch
                id="switch"
                name='switch'
                label="Disabled or Standard"
              />
              <Radio
                name='radio'
                label="Radio Button"
                conditionnals={{
                  switch: true
                }}
              />
              <Radio
                name='radio'
                label="Radio Button"
                disabled={true}
                conditionnals={{
                  switch: false
                }}
              />
              <br /><code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Switch
  id="switch"
  name='switch'
  label="Disabled or Standard"
/>
<Radio
  name='radio'
  label="Radio Button"
  conditionnals={{
    switch: true
  }}
/>
<Radio
  name='radio'
  label="Radio Button"
  disabled={true}
  conditionnals={{
    switch: false
  }}
/>
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
import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

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
          <CodeMirror
            value={`<Form>
  {(_) => (
    <>
      <Radio name='radio' label='Radio Button'/>
      <Radio name='radio1' checked label='Radio Button'/>
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
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Radio - Disabled</h4>
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
        <CodeMirror
            value={`<Form>
  {(_) => (
    <Radio
      name='radio'
      label='Radio Button'
      disabled={true}      
    />
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
  ))
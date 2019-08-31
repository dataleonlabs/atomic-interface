import React from 'react';
import { storiesOf } from '@storybook/react';
import RichText from './index';
import { Col, Button } from 'reactstrap';
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

storiesOf('Forms|RichText', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>RichText</h2>
        <br/>
        <hr/>
        <p>Rich text editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need. </p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>By default all formats are enabled and allowed to exist within an editor.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <RichText name="richText" label="Enter Your Message" />
          )}
        </Form>
        <p></p>
        <br/>
        <br/>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
  {(_) => (
    <RichText name='richText' label='Enter Your Message' />
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
  )).add('Read Only', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText - Read Only</h4>
        <br/>
        <p>Add <code>readOnly={`{true}`}</code> property to load editor in read only mode.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <RichText readOnly={true} name='richText' label='This is Read Only RichText' />
          )}
        </Form>
        <br/>
        <br/>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
  {(_) => (
    <RichText readOnly={true} name='richText' label='This is Read Only RichText' />
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
        <h4>RichText - Disabled</h4>
        <br/>
        <p>Add <code>disabled={`{true}`}</code> property to load editor in disable mode.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <RichText disabled={true} name="richText" label="This is Disabled RichText" />
          )}
        </Form>
        <br/>
        <br/>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
  {(_) => (
    <RichText readOnly={true} name='richText' label='This is Read Only RichText' />
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
  )).add('Toolbar Disabled only', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText - Toolbar Disabled only</h4>
        <br/>
        <p>Add <code>toolbarDisable={`{true}`}</code> property to load editor with only toolbar disabled mode.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <RichText toolbarDisable={true} name="richText" label="Enter Your Message | Toolbar is Disabled" />
          )}
        </Form>
        <br/>
        <br/>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
  {(_) => (
    <RichText toolbarDisable={true} name='richText' label='Enter Your Message | Toolbar is Disabled' />
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
  )).add('Theme Bubble', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText - Theme Bubble</h4>
        <br/>
        <p>Add <code>theme={`'bubble'`}</code> property to load editor with bubble theme.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <RichText theme="bubble" name="richText" label="Enter Your Message | Select All And Use Bubble Toolbar" />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
  {(_) => (
    <RichText theme='bubble' name='richText' label='Enter Your Message | Select All And Use Bubble Toolbar' />
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
  )).add('With Error', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>RichText - With Error</h4>
        <br/>
        <p>Add <code>error={`{true}`}</code> property to load editor with bubble theme.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <RichText error={true} name="richText" label="RichText with Error" required={true} />            
          )}
        </Form>
        <br/>
        <br/>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
  {(_) => (
    <RichText error={true} name='richText' label='RichText with Error' required={true} /> 
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
  ));
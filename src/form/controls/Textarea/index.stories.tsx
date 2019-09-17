import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './index';
import { Col } from 'reactstrap';
import Form from './../../index'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../Radio';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Textarea', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Textarea</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>A basic form control of textarea.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <Textarea placeholder={'Example content with Textarea'} name='text' />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Textarea placeholder={'Example content with Textarea'} name='text' />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Maximum Rows', () => (
    <React.Fragment>
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Textarea - Maximum Rows</h4>
        <br />
        <p>Add <code>maxRows={`{10}`}</code> property to ristrict the textarea content.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <Textarea placeholder={'Example maxRows 10'} name='text' maxRows={10} />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Textarea placeholder={'Example content with Textarea'} name='text' />
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
      <Col sm={6} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
        <h2>Form Elements - Textarea</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Conditional Example</h4>
        <br />
        <p>A conditional form control of textarea.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(values) => (
            <>
              <Radio value="small" id="small" name='type' label="Small Textarea" />
              <Radio value="big" id="big" name='type' label="Big Textarea" />
              <Textarea
                label="Small Textarea"
                placeholder={'Example content with Textarea'}
                rows={5}
                conditionnals={{
                  type: 'small'
                }}
                name='text' />
              <Textarea
                label="Big Textarea"
                placeholder={'Example content with Textarea'}
                rows={30}
                conditionnals={{
                  type: 'big'
                }}
                name='text' />
              <br /><code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Radio value="small" id="small" name='type' label="Small Textarea" />
<Radio value="big" id="big" name='type' label="Big Textarea" />
<Textarea
  label="Small Textarea"
  placeholder={'Example content with Textarea'}
  rows={5}
  conditionnals={{
    type: 'small'
  }}
  name='text' />
<Textarea
  label="Big Textarea"
  placeholder={'Example content with Textarea'}
  rows={30}
  conditionnals={{
    type: 'big'
  }}
  name='text' />`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));
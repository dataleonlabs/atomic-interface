import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './index';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('UI Elements|Spinner', module)
  .add('Border Spinner', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Spinner</h2>        
        <hr/>
        <p>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript. Read the <a href="https://getbootstrap.com/docs/4.2/components/spinners/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <h4>Border Spinner</h4>
        <br/>
        <p>Use the border spinners for a lightweight loading indicator.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Spinner color="dark" />
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<Spinner color="dark" />'
          options={{
            mode: 'jsx',
            lineNumbers: true,
            smartIndent: true,
            readOnly: true            
          }}
          editorDidMount={editor => {            
            reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  ))
  .add('Border Colors', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Border Colors</h4>
        <br/>
        <p>You can use any of our text color utilities on the standard spinner.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="info" />
        <Spinner color="light" />
        <Spinner color="dark" />
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="success" />
          <Spinner color="danger" />
          <Spinner color="warning" />
          <Spinner color="info" />
          <Spinner color="light" />
          <Spinner color="dark" />'
          options={{
            mode: 'jsx',
            lineNumbers: true,
            smartIndent: true,
            readOnly: true            
          }}
          editorDidMount={editor => {            
            reindent(editor);
          }}
        />        
      </Col>
    </React.Fragment>
  ))
  .add('Growing Spinners', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Growing Spinners</h4>
        <br/>
        <p>If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<Spinner type="grow" color="primary" />
          <Spinner type="grow" color="secondary" />
          <Spinner type="grow" color="success" />
          <Spinner type="grow" color="danger" />
          <Spinner type="grow" color="warning" />
          <Spinner type="grow" color="info" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />'
          options={{
            mode: 'jsx',
            lineNumbers: true,
            smartIndent: true,
            readOnly: true            
          }}
          editorDidMount={editor => {            
            reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  ))
 

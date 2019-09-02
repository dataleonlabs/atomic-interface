import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeEditor from './index';
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
storiesOf('Forms|CodeEditor', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>CodeEditor</h2>
        <br/>
        <hr/>
        <p>CodeEditor built for the modern web. It is possible to edit different type of scripts on the run.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>Add <code>mode={`'xml'`}</code> property to make CodeEditor compatible with xml.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <CodeEditor 
              name="editor" 
              mode="xml" 
              value='<?xml version="1.0"?>
              <configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
                <connectionStrings>
                  <add name="MyDB" 
                    connectionString="value for the deployed Web.config file" 
                    xdt:Transform="SetAttributes" xdt:Locator="Match(name)"/>
                </connectionStrings>
                <system.web>
                  <customErrors defaultRedirect="GenericError.htm"
                    mode="RemoteOnly" xdt:Transform="Replace">
                    <error statusCode="500" redirect="InternalError.htm"/>
                  </customErrors>
                </system.web>
              </configuration>' 
              label="Write Your Code" />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
<CodeEditor 
  name='editor' 
  mode='xml' 
  value='<?xml version='1.0'?>
  <configuration xmlns:xdt='http://schemas.microsoft.com/XML-Document-Transform'>
    <connectionStrings>
      <add name='MyDB' 
        connectionString='value for the deployed Web.config file' 
        xdt:Transform='SetAttributes' xdt:Locator='Match(name)'/>
    </connectionStrings>
    <system.web>
      <customErrors defaultRedirect='GenericError.htm'
        mode='RemoteOnly' xdt:Transform='Replace'>
        <error statusCode='500' redirect='InternalError.htm'/>
      </customErrors>
    </system.web>
  </configuration>' 
  label='Write Your Code' />
`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('JavaScript', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor - JavaScript</h4>
        <br/>
        <p>Add <code>mode={`'javascript'`}</code> property to make CodeEditor compatible with javascript.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <CodeEditor 
              name='editor' 
              mode='javascript' 
              value='for (var i = 0, len = namespaceFragments.length; i < len; i++) {
                var namespaceName = namespaceFragments[i];
                if (!currentNamespace[namespaceName]) {
                  Object.defineProperty(currentNamespace, namespaceName, 
                    { value: {}, writable: false, enumerable: true, configurable: true }
                  );
                }
                currentNamespace = currentNamespace[namespaceName];
              }'
              label='JavaScript Code Editor' />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
<CodeEditor 
  name='editor' 
  mode='javascript' 
  value='for (var i = 0, len = namespaceFragments.length; i < len; i++) {
    var namespaceName = namespaceFragments[i];
    if (!currentNamespace[namespaceName]) {
      Object.defineProperty(currentNamespace, namespaceName, 
        { value: {}, writable: false, enumerable: true, configurable: true }
      );
    }
    currentNamespace = currentNamespace[namespaceName];
  }'
  label='JavaScript Code Editor' />
`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  )).add('YAML', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor - YAML</h4>
        <br/>
        <p>Add <code>mode={`'YAML'`}</code> property to make CodeEditor compatible with YAML.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <CodeEditor name='editor' mode='yaml' value='%TAG ! tag:clarkevans.com,2002:
            --- !shape
              # Use the ! handle for presenting
              # tag:clarkevans.com,2002:circle
            - !circle
              center: &ORIGIN {x: 73, y: 129}
              radius: 7
            - !line
              start: *ORIGIN
              finish: { x: 89, y: 102 }
            - !label
              start: *ORIGIN
              color: 0xFFEEBB
              text: Pretty vector drawing.
            ' label='YAML Code Editor' />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
<CodeEditor name='editor' mode='yaml' value='%TAG ! tag:clarkevans.com,2002:
--- !shape
  # Use the ! handle for presenting
  # tag:clarkevans.com,2002:circle
- !circle
  center: &ORIGIN {x: 73, y: 129}
  radius: 7
- !line
  start: *ORIGIN
  finish: { x: 89, y: 102 }
- !label
  start: *ORIGIN
  color: 0xFFEEBB
  text: Pretty vector drawing.
' label='YAML Code Editor' />
`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  )).add('JSON', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor - JSON</h4>
        <br/>
        <p>Add <code>mode={`'JSON'`}</code> property to make CodeEditor compatible with JSON.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <CodeEditor 
              name="editor" 
              mode="json" 
              value='{
                "scope":"/client",
                "baseUrl":"/client",
                "moduleGenTarget":"amd"
            }'
              label="JSON Your Code" />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
<CodeEditor 
  name='editor' 
  mode='json' 
  value='{
    'scope':'/client',
    'baseUrl':'/client',
    'moduleGenTarget':'amd'
  }'
  label='JSON Your Code' />
`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  )).add('HTML', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor - HTML</h4>
        <br/>
        <p>Add <code>mode={`'HTML'`}</code> property to make CodeEditor compatible with HTML.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <CodeEditor 
              name="editor" 
              mode="html" 
              value='<!DOCTYPE HTML>
              <!-- 
                Comments are overrated
              -->
              <html>
              <head>
                <title>HTML Sample</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <style type="text/css">
                  h1 {
                    color: #CCA3A3;
                  }
                </style>
                <script type="text/javascript">
                  window.alert("I am a sample...");
                </script>
              </head>
              <body>
                <h1>Heading No.1</h1>
                <input disabled type="button" value="Click me" />
              </body>
              </html>'
              label="HTML Code Editor" />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
<CodeEditor 
  name='editor' 
  mode='html'
  value='<!DOCTYPE HTML>
  <!-- 
    Comments are overrated
  -->
  <html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <style type='text/css'>
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type='text/javascript'>
      window.alert('I am a sample...');
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type='button' value='Click me' />
  </body>
  </html>'
  label='HTML Code Editor' />
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
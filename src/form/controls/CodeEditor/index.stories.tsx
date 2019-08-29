import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeEditor from './index';
import { Col, Button } from 'reactstrap';
import Form from './../../index';

storiesOf('Forms|CodeEditor', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
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
      </Col>
    </React.Fragment>
  )).add('Example JavaScript', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor 
              name="editor" 
              mode="javascript" 
              value='for (var i = 0, len = namespaceFragments.length; i < len; i++) {
                var namespaceName = namespaceFragments[i];
                if (!currentNamespace[namespaceName]) {
                  Object.defineProperty(currentNamespace, namespaceName, 
                    { value: {}, writable: false, enumerable: true, configurable: true }
                  );
                }
                currentNamespace = currentNamespace[namespaceName];
              }'
              label="JavaScript Code Editor" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example YAML', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
        <Form>
          {(_) => (
            <CodeEditor name="editor" mode="yaml" value="%TAG ! tag:clarkevans.com,2002:
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
            " label="YAML Code Editor" />
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('Example JSON', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
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
      </Col>
    </React.Fragment>
  )).add('Example HTML', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>CodeEditor</h4>
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
      </Col>
    </React.Fragment>
  ));
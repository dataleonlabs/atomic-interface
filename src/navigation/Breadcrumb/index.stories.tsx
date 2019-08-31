import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import BreadcrumbItem from './BreadcrumbItem';
import Breadcrumb from './index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Navigation|Breadcrumb', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Breadcrumb</h2>
        <br/>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Read the Official Bootstrap Documentation for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <br/>
        <p>The example below is the basic styling of the breadcrumb from Bootstrap.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Breadcrumb>
          <BreadcrumbItem>Story</BreadcrumbItem>
          <BreadcrumbItem>Navigation</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Breadcrumb>
  <BreadcrumbItem>Story</BreadcrumbItem>
  <BreadcrumbItem>Navigation</BreadcrumbItem>
  <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
</Breadcrumb>`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
          <hr />
      </Col>
    </React.Fragment>
  ))
  .add('Loading', () => (
    <React.Fragment>
      <Col sm={12} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb - Loading</h4>
        <br/>
        <p>Add <code>loading={`{true}`}</code> property to display the loader inside breadcrumb.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div>
          <Breadcrumb loading={true}>
            <BreadcrumbItem> <a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem> <a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<div>
  <Breadcrumb loading={true}>
    <BreadcrumbItem> <a href='#'>Story</a></BreadcrumbItem>
    <BreadcrumbItem> <a href='#'>Navigation</a></BreadcrumbItem>
    <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
</div>`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  ))
  .add('Link', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Breadcrumb - Link</h4>
        <br/>
        <p>Additional anchor tag allows to provide the referance to links.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div>
          <Breadcrumb>
            <BreadcrumbItem> <a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem> <a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<div>
  <Breadcrumb>
    <BreadcrumbItem> <a href='#'>Story</a></BreadcrumbItem>
    <BreadcrumbItem> <a href='#'>Navigation</a></BreadcrumbItem>
    <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
</div>`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  ))
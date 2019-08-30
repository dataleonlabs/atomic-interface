import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Tabs from './index';
import TabItem from './TabItem';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('UI Elements|Tabs', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Tabs</h2>
        <br/>
        <hr/>
        <p>Use the Bootstrap tab javascript plugin to extend navigational tabs and pills to create tabbable panes of local content.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>The basic tab component consists of links, that are aligned horizontally.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title={"One"}>Foo Action</TabItem>
          <TabItem title={"Two"}>Bar Action</TabItem>
          <TabItem title={"Three"}>Quo Action</TabItem>
        </Tabs>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title={"One"}>Foo Action</TabItem>
          <TabItem title={"Two"}>Bar Action</TabItem>
          <TabItem title={"Three"}>Quo Action</TabItem>
        </Tabs>'
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
  .add('Disabled State', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Disabled State</h4>
        <br/>
        <p>The basic tab component with some item is set to disabled.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title={"One"} >Foo Action</TabItem>
          <TabItem title={"Two"} disabled >Bar Action</TabItem>
          <TabItem title={"Three"}>Quo Action</TabItem>
        </Tabs>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title={"One"} >Foo Action</TabItem>
          <TabItem title={"Two"} disabled >Bar Action</TabItem>
          <TabItem title={"Three"}>Quo Action</TabItem>
        </Tabs>'
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


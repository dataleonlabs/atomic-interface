import React from 'react';
import { storiesOf } from '@storybook/react';
import Abbreviation from './index';
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

storiesOf('UI Elements|Abbreviation', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
        <h2>Abbreviation</h2>
        <br/>
        <p>Avatars are user's face image that you can use throughout the design from tables to dialog or menus with options for sizes and shapes.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <p>An avatar can have a temporary use of user's initial name while their photos are not yet available.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <p><Abbreviation>Demo Of Alert</Abbreviation></p>
        <p><Abbreviation>Demo Box</Abbreviation></p>
        <p><Abbreviation>Demo Alert</Abbreviation></p>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value='<p><Abbreviation>Demo Of Alert</Abbreviation></p>
          <p><Abbreviation>Demo Box</Abbreviation></p>
          <p><Abbreviation>Demo Alert</Abbreviation></p>'
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
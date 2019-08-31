import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Panel from './index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('UI Elements|Panel', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Panel</h2>
        <br/>
        <p>Add panel along with the content along with relevant title.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <p>Below is the static example of the basic panel.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Panel title="Header title">
          Special Title Treatment
          With supporting text below as a natural lead-in to additional content.
        </Panel>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value='<Panel title="Header title">
          Special Title Treatment
          With supporting text below as a natural lead-in to additional content.
        </Panel>'
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

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import HelpIcon from './index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('UI Elements|HelpIcon', module)
  .add('Basic Example', () => (
    <React.Fragment>
    <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h2>Help Icon</h2>
      <br/>
      <hr/>
      <p>The basic help icon consist help content which will open on clicking the icon.</p>
      <br/>
      <h4>Basic Example</h4>
      <br/>
      <p>In order to display the help icon add the property <code>header='Help'</code> and  <code>target='help'</code> to icon.</p>
      <hr/>
      <h6><strong>Example</strong></h6>
      <hr/>
      <span>
        <HelpIcon header='Help' target='help'>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </HelpIcon>
      </span>
      <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
        <CodeMirror
          value='<span>
          <HelpIcon header="Help" target="help">
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </HelpIcon>
        </span>'
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
